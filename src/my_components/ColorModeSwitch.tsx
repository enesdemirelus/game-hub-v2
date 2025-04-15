import { useColorMode } from "../components/ui/color-mode";
import {
  ClientOnly,
  Color,
  HStack,
  IconButton,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { LuMoon, LuSun } from "react-icons/lu";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <>
      <HStack padding={"10px"}>
        <Text textStyle={"lg"}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Text>
        <ClientOnly fallback={<Skeleton boxSize={"8"}></Skeleton>}>
          <IconButton onClick={toggleColorMode} variant="outline" size="xl">
            {colorMode === "light" ? <LuSun /> : <LuMoon />}
          </IconButton>
        </ClientOnly>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
