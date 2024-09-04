"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@/app/service/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/app/hooks/useGame";
import GameCard from "@/app/components/GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
