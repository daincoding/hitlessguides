import { Card, Image } from "@chakra-ui/react";
import { Game } from "./GameGrid";

interface Props {
  game: Game;
  onClick: () => void; // New prop for click handling
}

const GameCard = ({ game, onClick }: Props) => {
  return (
    <Card.Root
      borderRadius={10}
      overflow="hidden"
      onClick={onClick}
      cursor="pointer"
    >
      <Image src={game.background} height="250px" width="500px" />
      <Card.Body>
        <Card.Title fontSize="2xl" textAlign="center">
          {game.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
