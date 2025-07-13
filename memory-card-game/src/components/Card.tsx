import React from "react";
import "./Card.css";

interface CardProps {
  card: {
    id: number;
    image: string;
    matched: boolean;
  };
  isFlipped: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ card, isFlipped, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      {isFlipped ? (
        <div className="card-front">{card.image}</div>
      ) : (
        <div className="card-back">❓</div>
      )}
    </div>
  );
};




export default Card;
