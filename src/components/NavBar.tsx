import { Heading, HStack, Image } from "@chakra-ui/react";
import waiting_dain from "../assets/waiting_dain.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={waiting_dain} boxSize="60px"></Image>
        <Heading fontSize="3xl">Hitless Guide Search</Heading>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
    </>
  );
};

export default NavBar;
