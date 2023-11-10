import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/auth-context";
import { useFilter } from "../../contexts/filter-context";
import { Header } from "../../components/Header";
import "./styles.css";
import Score from "./Score";
import Question from "./Question";

export function Quiz() {
  const { auth } = useAuth();
  const { filter } = useFilter();
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [percent, setPercent] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setWrong(wrong + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setTimeout(setCurrentQuestion(nextQuestion), 2000);
    } else {
      setPercent((score / questions.length) * 100);
      setShowScore(true);
    }
  };

  useEffect(() => {
    async function fetchData() {
      if (filter.book && filter.grade) {
        const response = await fetch(
          `http://localhost:3000/quiz/find-by-filter?book=${filter.book}&grade=${filter.grade}`
        );
        const data = await response.json();
        setQuestions(data);
        setIsLoading(false);
      }
    }

    fetchData();
  }, [filter.book, filter.grade]);

  return (
    <>
      <Header username={auth.username} />

      <div className="quiz">
        {isLoading && <h1>Carregando...</h1>}

        {!isLoading && showScore && (
          <Score questionsQuantity={questions.length} correctAnswer={score} />
        )}

        {!isLoading && questions.length == 0 && (
          <h1>Sem perguntas cadastradas para os filtros selecionados...</h1>
        )}

        {!isLoading && questions.length > 0 && !showScore && (
          <Question
            question={questions[currentQuestion]}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        )}
      </div>
    </>
  );
}
