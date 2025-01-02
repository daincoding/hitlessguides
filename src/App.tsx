import { Box, Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid, { Game } from "./components/GameGrid";
import CategoryList, { Categories } from "./components/CategoryList";
import { useState } from "react";
import RunSelector, { RunOption } from "./components/RunSelector";
import DarkSouls1GuideList from "./components/games/darksouls1/DarkSouls1GuideList";
import HeadingMain from "./components/HeadingMain";

function App() {
  // UseStates

  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );
  const [selectedRun, setSelectedRun] = useState<RunOption | null>(null);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Handles

  const handleGameSelection = (game: Game) => {
    setSelectedGame(game); // Set the new selected game
    setSelectedRun(null); // Reset the run filter
  };

  // MainApp

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <GridItem area="aside" hideBelow="lg" paddingX={5}>
        <CategoryList
          selectedCategory={selectedCategory}
          onSelectedCategory={(category) => {
            setSelectedCategory(category);
            setSelectedGame(null); // Reset game when a category is selected
          }}
        />
      </GridItem>
      <GridItem area="main">
        <Box paddingLeft={3}>
          {selectedGame && (
            <HeadingMain
              selectedRun={selectedRun}
              selectedGame={selectedGame}
            ></HeadingMain>
          )}

          {selectedGame && (
            <RunSelector
              selectedRun={selectedRun}
              onSelectedRun={(option) => setSelectedRun(option)}
            />
          )}
        </Box>
        {selectedGame ? (
          <DarkSouls1GuideList
            selectedRun={selectedRun}
            selectedGame={selectedGame}
          />
        ) : (
          <GameGrid
            selectedCategory={selectedCategory}
            onGameSelect={handleGameSelection}
          />
        )}
      </GridItem>
    </Grid>
  );
}

export default App;
