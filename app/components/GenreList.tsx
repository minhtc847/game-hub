"use client";
import React from "react";
import useGenres from "@/app/hooks/useGenres";
import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import getCroppedImageUrl from "@/app/service/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
export default GenreList;
