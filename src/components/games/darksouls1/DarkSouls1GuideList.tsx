import { SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Ds1Card from "./Ds1Card";
import { Categories } from "@/components/CategoryList";
import { RunOption } from "@/components/RunSelector";

export interface Guide {
  id: number;
  name: string;
  author: string;
  runtag: string;
  category: string;
  thumbnail: string;
  youtubeLink: string;
}

interface Props {
  selectedCategory: Categories | null;
  selectedRun: RunOption | null;
}

const DarkSouls1GuideList: React.FC<Props> = ({
  selectedCategory,
  selectedRun,
}) => {
  const [guides, setGuides] = useState<Guide[]>([]); // State to hold the guides list

  useEffect(() => {
    // Fetch the local JSON file
    fetch("/gameguides/darksouls1.json")
      .then((response) => response.json())
      .then((data) => setGuides(data))
      .catch((error) => console.error("Error loading guides:", error));
  }, []);

  // Filter guides by selected category and selected run if provided
  const filteredGuides = guides.filter((guide) => {
    const categoryMatches = selectedCategory
      ? guide.category === selectedCategory.category
      : true; // If no category is selected, all guides match

    const runMatches = selectedRun ? guide.runtag === selectedRun.runtag : true; // If no run is selected, all guides match

    return categoryMatches && runMatches; // Both conditions must be true
  });

  return (
    <div>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        gap="25px"
        padding="10px"
      >
        {filteredGuides.map((guide) => (
          <Ds1Card key={guide.id} guide={guide} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default DarkSouls1GuideList;
