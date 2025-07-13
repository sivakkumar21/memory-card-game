export interface CardProp {
  card: ICard;
  isFlipped: boolean;
  onCardClick: () => void;
}

export interface ICard {
  id: number;
  image: string;
  matched :boolean;
}
