import React from "react";
import { Game } from "@/app/hooks/useGame";
import { Card, CardBody } from "@chakra-ui/card";
import { Heading, HStack, Image, Text } from "@chakra-ui/react";
import PlatformIconList from "@/app/components/PlatformIconList";
import CriticScore from "@/app/components/CriticScore";

interface Pros {
  game: Game;
}

const GameCard = ({ game }: Pros) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </CardBody>
    </Card>
  );
};

//overflow is used to hide the content if the card is too big
export default GameCard;
