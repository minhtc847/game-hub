"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@/app/service/api-client";
import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "@/app/hooks/useGame";
import GameCard from "@/app/components/GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "@/app/components/GameCardContainer";

const GameGrid = () => {
  const { data: games, error, isLoading } = useGame();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        spacing={3}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton key={skeleton}></GameCardSkeleton>
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard key={game.id} game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};
export default GameGrid;
