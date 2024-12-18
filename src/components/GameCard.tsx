import { Card, Image } from "@chakra-ui/react";
import { Game } from "./GameGrid";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <Image src={game.background} />
      <Card.Body>
        <Card.Title fontSize="2xl" textAlign="center">
          {game.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
