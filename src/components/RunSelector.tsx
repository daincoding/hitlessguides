import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";
import { Button } from "@/components/ui/button";
import { BsChevronDown } from "react-icons/bs";
import { useEffect, useState } from "react";

export interface RunOption {
  id: number;
  name: string;
  runtag: string;
}

interface Props {
  onSelectedRun: (runOption: RunOption) => void;
  selectedRun: RunOption | null;
}

const RunSelector: React.FC<Props> = ({
  onSelectedRun,
  selectedRun,
}: Props) => {
  const [runOptions, setRunOptions] = useState<RunOption[]>([]);

  useEffect(() => {
    fetch("/runoptions.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data: RunOption[]) => setRunOptions(data)) // Explicitly tell TypeScript the type of `data`
      .catch((error) => console.error("Error fetching run options:", error));
  }, []);

  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          <BsChevronDown /> {selectedRun?.name || "Run Categories"}
        </Button>
      </MenuTrigger>
      <MenuContent>
        {runOptions.length > 0 ? (
          runOptions.map((option) => (
            <MenuItem
              key={option.id}
              value={option.runtag}
              onClick={() => onSelectedRun(option)}
            >
              {option.name}
            </MenuItem>
          ))
        ) : (
          <p>No Options</p>
        )}
      </MenuContent>
    </MenuRoot>
  );
};

export default RunSelector;
