import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score > 90
      ? "green"
      : score > 75
      ? "yellow"
      : score > 50
      ? "orange"
      : "red";
  return (
    <>
      <Badge
        color={color}
        borderRadius={"4px"}
        paddingX={2}
        fontSize={"20px"}
        size={"lg"}
      >
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
