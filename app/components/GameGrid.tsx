"use client";
import React, { useEffect, useState } from "react";
import apiClient from "@/app/service/api-client";
import { Text } from "@chakra-ui/react";
import useGame from "@/app/hooks/useGame";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
export default GameGrid;
