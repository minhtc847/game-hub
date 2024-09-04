import React from "react";
import { Game } from "@/app/hooks/useGame";
import { Card, CardBody } from "@chakra-ui/card";
import { Heading, Image } from "@chakra-ui/react";

interface Pros {
  game: Game;
}

const GameCard = ({ game }: Pros) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

//overflow is used to hide the content if the card is too big
export default GameCard;
