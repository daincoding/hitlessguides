import { Box, Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid, { Game } from "./components/GameGrid";
import CategoryList, { Categories } from "./components/CategoryList";
import { useState } from "react";
import RunSelector, { RunOption } from "./components/RunSelector";
import DarkSouls1GuideList from "./components/games/darksouls1/DarkSouls1GuideList";
import HeadingMain from "./components/HeadingMain";
import DarkSouls2GuideList from "./components/games/darksouls2/DarkSouls2GuideList";
import DarkSouls3GuideList from "./components/games/darksouls3/DarkSouls3GuideList";
import LoPGuideList from "./components/games/liesofp/LoPGuideList";
import Footer from "./components/Footer";
import { RxReset } from "react-icons/rx";

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

  const resetApp = () => {
    // Resets all state variables to their initial values
    setSelectedCategory(null);
    setSelectedRun(null);
    setSelectedGame(null);
  };

  // MainApp

  return (
    <Grid
      height="100vh"
      templateAreas={{
        base: `"nav" "main" "footer"`,
        lg: `"nav nav" "aside main" "footer footer"`, // 1024px
      }}
      templateRows={{
        base: "100px 1fr 100px",
        lg: "100px 1fr 100px",
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
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
            />
          )}
          {selectedGame && (
            <HStack paddingLeft={4} alignItems="center" mt={4}>
              <RunSelector
                selectedRun={selectedRun}
                onSelectedRun={(option) => setSelectedRun(option)}
              />
              <Button variant="subtle" colorPalette="teal" onClick={resetApp}>
                <RxReset />
              </Button>
            </HStack>
          )}
        </Box>
        {selectedGame ? (
          <>
            <DarkSouls1GuideList
              selectedRun={selectedRun}
              selectedGame={selectedGame}
            />
            <DarkSouls2GuideList
              selectedRun={selectedRun}
              selectedGame={selectedGame}
            />
            <DarkSouls3GuideList
              selectedRun={selectedRun}
              selectedGame={selectedGame}
            />
            <LoPGuideList
              selectedRun={selectedRun}
              selectedGame={selectedGame}
            />
          </>
        ) : (
          <GameGrid
            selectedCategory={selectedCategory}
            onGameSelect={handleGameSelection}
          />
        )}
      </GridItem>
      <GridItem
        area="footer"
        paddingLeft={5}
        paddingRight={5}
        paddingBottom={2}
      >
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
