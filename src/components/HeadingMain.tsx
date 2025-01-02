import { Heading } from "@chakra-ui/react";
import { RunOption } from "./RunSelector";
import { Game } from "./GameGrid";

interface Props {
  selectedRun: RunOption | null;
  selectedGame: Game | null; // The currently selected game
}

const HeadingMain = ({ selectedRun, selectedGame }: Props) => {
  const head = `${selectedGame?.name || ""} - ${selectedRun?.name || ""}`;

  return (
    <Heading as="h1" marginY={10} fontSize="5xl">
      {head}
    </Heading>
  );
};

export default HeadingMain;
