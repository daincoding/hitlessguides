import { Box, Heading, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <HStack justifyContent="space-between">
      <Box alignContent="center">
        <Heading fontSize="medium">Disclaimer</Heading>
        <Text fontSize="sm">
          All Games are based on the official Team Hitless Gamelist!
        </Text>
      </Box>
      <Heading textAlign="center" fontSize="sm">
        Made with{" "}
        <Icon fontSize="2xs">
          <FaHeart />
        </Icon>{" "}
        by dain. <br></br>Twitch:{" "}
        <Link
          variant="underline"
          href="https://twitch.tv/dain_sounds"
          colorPalette="teal"
          target="blank"
        >
          dain_sounds
        </Link>
      </Heading>
      <Text>
        Submit your Guide on{" "}
        <Link
          variant="underline"
          href="https://discord.gg/dain"
          colorPalette="teal"
          target="blank"
        >
          Discord
        </Link>{" "}
        in the Guide Channel!
      </Text>
    </HStack>
  );
};

export default Footer;
