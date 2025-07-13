import type { CardType } from "./types";

const cardImages = ["🍎", "🐶", "🚗", "🌟", "🎈", "🎵", "⚽", "🐱"];

export function generateShuffledCards(): CardType[] {
  const duplicated = [...cardImages, ...cardImages];
  const shuffled = duplicated
    .map((image, index) => ({
      id: index + 1,
      image,
      matched: false,
    }))
    .sort(() => Math.random() - 0.5);

  return shuffled;
}
