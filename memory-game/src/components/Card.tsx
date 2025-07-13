import type { CardProp } from "../types";
import "./Card.css";
export default function Card({ card, isFlipped, onCardClick }: CardProp) {
  return (
    <div className="card-container" onClick={onCardClick}>
      {isFlipped ? (
        <img className="card-image" src={card.image}></img>
      ) : (
        <div className="card-closed">❓</div>
      )}
    </div>
  );
}
