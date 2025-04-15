import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./my_components/NavBar";
import { useColorMode } from "./components/ui/color-mode";

// Creating a grid with responsive layout.
const App = () => {
  const { toggleColorMode } = useColorMode();
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
