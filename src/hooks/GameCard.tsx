import { Card, CardBody, CardRoot, Heading, Image } from "@chakra-ui/react";
import { Game } from "./useGames";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <>
      <CardRoot borderRadius={"10px"} overflow={"hidden"}>
        <Image src={game.background_image}></Image>
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </CardRoot>
    </>
  );
};

export default GameCard;
