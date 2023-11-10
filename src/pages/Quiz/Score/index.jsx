import React from "react";

const Score = ({ questionsQuantity, correctAnswer }) => {
  const wrongAnswer = questionsQuantity - correctAnswer;
  const percentage = (correctAnswer / questionsQuantity) * 100;

  return (
    <div className="score-section">
      <h1>score</h1>
      <div className="correct-section">
        <strong>Acertos</strong>
        <strong>{correctAnswer}</strong>
      </div>
      <div className="wrong-section">
        <strong>Erros</strong>
        <strong>{wrongAnswer}</strong>
      </div>
      <div className="percent-section">
        <strong>Porcentagem</strong>
        <strong>{percentage}%</strong>
      </div>
    </div>
  );
};

export default Score;
