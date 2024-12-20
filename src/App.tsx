import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import CategoryList, { Categories } from "./components/CategoryList";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Categories | null>(
    null
  );

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
          onSelectedCategory={(category) => setSelectedCategory(category)}
        ></CategoryList>
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedCategory={selectedCategory}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
