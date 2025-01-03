import { Box, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ERCard from "./ERCard";
import { RunOption } from "@/components/RunSelector";
import { Game } from "@/components/GameGrid";

export interface Guide {
  id: number;
  name: string;
  author: string;
  runtag: string[];
  category: string;
  thumbnail: string;
  youtubeLink: string;
  gameId: number;
}

interface Props {
  selectedRun: RunOption | null;
  selectedGame: Game | null; // The currently selected game
}

const ERGuideList: React.FC<Props> = ({ selectedRun, selectedGame }) => {
  const [guides, setGuides] = useState<Guide[]>([]); // State to hold the guides list

  useEffect(() => {
    // Fetch the local JSON file
    fetch("/gameguides/eldenring.json")
      .then((response) => response.json())
      .then((data) => setGuides(data))
      .catch((error) => console.error("Error loading guides:", error));
  }, []);

  // Filter guides by selected game and run
  const filteredGuides = guides.filter((guide) => {
    const gameMatches = selectedGame ? guide.gameId === selectedGame.id : true; // Match by gameId
    const runMatches = selectedRun
      ? guide.runtag.includes(selectedRun.runtag)
      : true; // Match by runtag

    return gameMatches && runMatches; // Both must match
  });

  return (
    <div>
      {filteredGuides.length > 0 ? (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          gap="25px"
          padding="10px"
        >
          {filteredGuides.map((guide) => (
            <ERCard key={guide.id} guide={guide} />
          ))}
        </SimpleGrid>
      ) : (
        <Box textAlign="center" padding="20px">
          No guides available for this selection.
        </Box>
      )}
    </div>
  );
};

export default ERGuideList;
