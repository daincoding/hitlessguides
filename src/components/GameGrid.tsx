import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import GameCard from "./GameCard";
import { Categories } from "./CategoryList";

export interface Game {
  id: number;
  name: string;
  genre: string;
  background: string;
  category: string;
}

interface Props {
  selectedCategory: Categories | null;
  onGameSelect: (game: Game) => void;
}

const GameGrid: React.FC<Props> = ({ selectedCategory, onGameSelect }) => {
  const [games, setGames] = useState<Game[]>([]); // State to hold the games list

  useEffect(() => {
    // Fetch the local JSON file
    fetch("/games.json")
      .then((response) => response.json())
      .then((data) => setGames(data))
      .catch((error) => console.error("Error loading games:", error));
  }, []);

  // Filter games by the selected category if a category is selected
  const filteredGames = games.filter((game) => {
    const matchesCategory = selectedCategory
      ? game.category === selectedCategory.category
      : true;
    return matchesCategory;
  });

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap="25px"
        padding="10px"
      >
        {filteredGames.map((game) => (
          <GameCard
            key={game.id}
            game={game}
            onClick={() => onGameSelect(game)}
          />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
