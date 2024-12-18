import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";

export interface Game {
  id: number;
  name: string;
  genre: string;
  background: string;
}

const GameGrid: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]); // State to hold the games list

  useEffect(() => {
    // Fetch the local JSON file
    fetch("/games.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error loading games:", error));
  }, []);

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap="50px"
        padding="10px"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
