import React from "react";
import { Card, CardBody } from "@chakra-ui/card";
import { Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton
        height="200px"
        width="300px"
        borderRadius={10}
        overflow="hidden"
      ></Skeleton>
      <CardBody>
        <SkeletonText></SkeletonText>
      </CardBody>
    </Card>
  );
};
export default GameCardSkeleton;
