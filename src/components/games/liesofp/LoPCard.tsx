import { Card, Image } from "@chakra-ui/react";
import { Guide } from "./LoPGuideList";

interface Props {
  guide: Guide;
}

const LoPCard = ({ guide }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow="hidden">
      <a
        href={guide.youtubeLink} // Set the YouTube link
        target="_blank" // Open the link in a new tab
        rel="noopener noreferrer" // Security
      >
        <Image src={guide.thumbnail} />
        <Card.Body>
          <Card.Title fontSize="2xl" textAlign="center">
            {guide.name}
          </Card.Title>
          <Card.Description fontSize="sm" textAlign="right" paddingTop={10}>
            by {guide.author}
          </Card.Description>
        </Card.Body>
      </a>
    </Card.Root>
  );
};

export default LoPCard;
