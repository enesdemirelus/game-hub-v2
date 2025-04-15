import { Grid, GridItem, Show } from "@chakra-ui/react";

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
        <GridItem area="nav" bg="coral">
          Nav
        </GridItem>
        <GridItem
          area="aside"
          bg="gold"
          display={{ base: "none", lg: "block" }} // making sure aside does not render when screen is large.
        >
          Aside
        </GridItem>
        <GridItem area="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
};

export default App;
