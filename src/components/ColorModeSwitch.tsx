import { HStack } from "@chakra-ui/react";
import { useColorMode } from "./ui/color-mode";
import { Switch } from "./ui/switch";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          checked={colorMode === "dark"}
          onChange={toggleColorMode}
          colorPalette="green"
        >
          Dark Mode
        </Switch>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
