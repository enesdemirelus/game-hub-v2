import { Card, CardBody, CardRoot } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <CardRoot borderRadius={"10px"} overflow={"hidden"}>
        <Skeleton height={"400px"}></Skeleton>
        <CardBody>
          <SkeletonText></SkeletonText>
        </CardBody>
      </CardRoot>
    </>
  );
};

export default GameCardSkeleton;
