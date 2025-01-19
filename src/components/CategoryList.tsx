import { Button, Heading, HStack, Image, List } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export interface Categories {
  id: number;
  category: string;
  categorylogo: string;
}

interface Props {
  onSelectedCategory: (category: Categories | null) => void;
  selectedCategory: Categories | null;
}

const CategoryList: React.FC<Props> = ({
  selectedCategory,
  onSelectedCategory,
}) => {
  const [category, setCategory] = useState<Categories[]>([]); // State to hold the games list

  useEffect(() => {
    // Fetch the local JSON file
    fetch("/categories.json")
      .then((response) => response.json())
      .then((data) => setCategory(data))
      .catch((error) => console.error("Error loading games:", error));
  }, []);

  return (
    <>
      <Heading marginY={10} paddingLeft={8}>
        Categories
      </Heading>
      <List.Root listStyle="none">
        {category.map((category) => (
          <List.Item key={category.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={category.categorylogo}
              ></Image>
              <Button
                fontSize="lg"
                variant="ghost"
                fontWeight={
                  category.id === selectedCategory?.id ? "bold" : "normal"
                }
                onClick={() =>
                  category.category === "All"
                    ? onSelectedCategory(null) // Reset selection
                    : onSelectedCategory(category)
                }
              >
                {category.category}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default CategoryList;
