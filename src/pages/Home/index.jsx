import React, { useState } from "react";
import "./styles.css";
import { useAuth } from "../../contexts/auth-context";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../contexts/filter-context";

export function Home() {
  const { setAuth } = useAuth();
  const { setFilter } = useFilter();
  const [username, setUsername] = useState();
  const [book, setBook] = useState("Português");
  const [grade, setGrade] = useState("1 Serie");
  const navigate = useNavigate();

  function handleLogin() {
    setAuth({ username: username });
    setFilter({ book: book, grade: grade });
    navigate("/quiz");
  }

  return (
    <>
      <div className="container">
        <h1>Nome</h1>
        <input
          type="text"
          placeholder="Insira seu nome..."
          onChange={(e) => setUsername(e.target.value)}
        />

        <select onChange={(e) => setBook(e.target.value)}>
          <option value="Português">Português</option>
          <option value="Inglês">Inglês</option>
          <option value="Espanhol">Espanhol</option>
        </select>

        <select onChange={(e) => setGrade(e.target.value)}>
          <option value="1 Serie">1ª Serie</option>
          <option value="2 Serie">2ª Serie</option>
          <option value="3 Serie">3ª Serie</option>
          <option value="4 Serie">4ª Serie</option>
          <option value="5 Serie">5ª Serie</option>
        </select>

        <button type="button" onClick={handleLogin}>
          acessar
        </button>
      </div>
    </>
  );
}
