import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "@/app/components/NavBar";
import GameGrid from "@/app/components/GameGrid";
import GenreList from "@/app/components/GenreList";

export default function Home() {
  return (
    <main className="">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //1024
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList></GenreList>
          </GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </main>
  );
}
