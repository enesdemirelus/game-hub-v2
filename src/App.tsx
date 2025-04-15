import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./my_components/NavBar";
import GameGrid from "./my_components/GameGrid";
import GenreList from "./my_components/GenreList";

// Creating a grid with responsive layout.
const App = () => {
  return (
    <>
      <Grid
        templateAreas={{
          // assigning how the grid would look like for different screen sizes.
          base: '"nav" "main"',
          lg: '"nav nav" "aside main"',
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <GridItem
          area="aside"
          display={{ base: "none", lg: "block" }} // making sure aside does not render when screen is large.
        >
          <GenreList></GenreList>
        </GridItem>
        <GridItem area="main">
          <GameGrid></GameGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
