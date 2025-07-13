import { useEffect, useState } from "react";
import Card from "./components/Card";
import "./App.css";
import { getShuffledCards, preloadImages } from "./utlis";
import type { ICard } from "./types";
import aeroplane from "./assets/aeroplane.jpg";
import car from "./assets/car.jpg";
import chotaBeem from "./assets/chotaBeem.jpg";
import cloud from "./assets/cloudy.png";
import tiger from "./assets/tiger.png";
import pumpkin from "./assets/pumpkin.png";
import panda from "./assets/panda.png";
import dora from "./assets/dora.png";


export default function App() {
  const [cards, setCards] = useState<ICard[] | null>(null);
  const [firstCard, setFirstCard] = useState<ICard | null>(null);
  const [secondCard, setSecondCard] = useState<ICard | null>(null);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

  useEffect(() => {
    preloadImages([
  aeroplane,
  car,
  chotaBeem,
  cloud,
  tiger,
  pumpkin,
  panda,
  dora,
])
    setCards(getShuffledCards());
  }, []);

  function handleCardClick(card: ICard) {
    if (card.matched || (firstCard && secondCard)) return;
    if (firstCard === null) {
      setFirstCard(card);
    } else {
      setSecondCard(card);
    }
  }

  useEffect(() => {
    if (firstCard?.image === secondCard?.image) {
      cards?.forEach((card) => {
        if (card === firstCard) {
          card.matched = true;
        } else if (card === secondCard) {
          card.matched = true;
        }
      });
      if (cards) setIsGameFinished(cards.every((card) => card.matched));

      resetCards();
    } else {
      setTimeout(() => resetCards(), 1000);
    }
  }, [secondCard]);

  function resetCards() {
    setFirstCard(null);
    setSecondCard(null);
  }

  function resetGame() {
    setCards(getShuffledCards());
    setIsGameFinished(false);
  }
  return (
    <div className="game-page">
      {isGameFinished ? (
        <div className="win-message">🎉 You Won, Mithu! 🎉</div>
      ) : (
        <div className="title">
          {" "}
          🧠 Memory Game for&nbsp;
          <span style={{ color: "#ff5e57" }}>Mithu!!!</span> 🎈
        </div>
      )}
      <div className="container">
      <div className="game-board">
        {cards?.map((card) => (
          <Card
            key={card.id}
            card={card}
            isFlipped={
              card.matched || card === firstCard || card === secondCard
            }
            onCardClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      </div>
      <div className="reset-game">
        <div onClick={() => resetGame()}>Reset Game</div>
      </div>
    </div>
  );
}
