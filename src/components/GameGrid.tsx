import React, { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
  genre: string;
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
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
