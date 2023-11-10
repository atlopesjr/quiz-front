import React from "react";

const Question = ({ question, handleAnswerOptionClick }) => {
  return (
    <>
      <div className="question-section">
        <div className="question-text">
          <h1>{question.question}</h1>
        </div>
      </div>

      <div className="answer-section">
        {question.answers.map((answer) => (
          <button
            key={answer.answerDescription}
            onClick={() => handleAnswerOptionClick(answer.isCorrect)}
          >
            {answer.answerDescription}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
