import React, { useEffect, useState } from "react";
import { generateShuffledCards } from "./utils";
import "./styles.css";
import type { CardType } from "./types";
import Card from "./components/card";

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [firstCard, setFirstCard] = useState<CardType | null>(null);
  const [secondCard, setSecondCard] = useState<CardType | null>(null);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCards(generateShuffledCards());
  }, []);

  const handleCardClick = (card: CardType) => {
    if (disabled || card === firstCard || card.matched) return;

    if (!firstCard) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
      setDisabled(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.image === secondCard.image) {
        setCards(prev =>
          prev.map(c =>
            c.image === firstCard.image ? { ...c, matched: true } : c
          )
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisabled(false);
  };

  const handleRestart = () => {
    resetTurn();
    setCards(generateShuffledCards());
  };

  return (
    <div className="app">
      <h1>🧠 Memory Game</h1>
      <button onClick={handleRestart}>🔄 Restart</button>
      <div className="card-grid">
        {cards.map(card => (
          <Card
            key={card.id}
            card={card}
            isFlipped={
              card === firstCard ||
              card === secondCard ||
              card.matched
            }
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
