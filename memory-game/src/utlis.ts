import aeroplane from "./assets/aeroplane.jpg";
import car from "./assets/car.jpg";
import chotaBeem from "./assets/chotaBeem.jpg";
import cloud from "./assets/cloudy.png";
import tiger from "./assets/tiger.png";
import pumpkin from "./assets/pumpkin.png";
import panda from "./assets/panda.png";
import dora from "./assets/dora.png";

const cardImages = [
  aeroplane,
  car,
  chotaBeem,
  cloud,
  tiger,
  pumpkin,
  panda,
  dora,
];

export function getShuffledCards() {
  const cards = cardImages.map((cardImage) => {
    return { image: cardImage };
  });

  const duplicatedCards = [...cards, ...cards];

  return duplicatedCards
    .map((card, index) => {
      return {
        id: index + 1,
        image: card.image,
        matched: false,
      };
    })
    .sort(() => Math.random() - 0.5);
}
