import {
  FormControl,
  FormControlLabel,
  ToggleButtonGroup,
} from "@mui/material";
import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import SortIcon from "@mui/icons-material/Sort";
// import SplitScreenIcon from "@mui/icons-material/SplitScreen";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { workoutNames } from "../../helpers/workoutHelper";
import { WorkoutNamesType, WorkoutsArr } from "../Workouts/types";

import { setToStorage } from "../../services/storageService";

import {
  DateSortingGroup,
  SortingGroup,
  SortingGroupIcons,
  StyledCheckbox,
  StyledToggleButton,
} from "./SortingPanel.view";
import { GridLayoutType, usePanelValue } from "../../context/PanelContext";
import { useWorkoutValue } from "../../context/WorkoutContext";

// import GridViewIcon from "@mui/icons-material/Edit";

let basicWorkouts: WorkoutsArr = [];

function SortingPanel() {
  const [sortState, setSortState] = useState<Record<WorkoutNamesType, boolean>>(
    {
      "Lower 2": false,
      "Upper 1": false,
      "Lower 1": false,
      "Upper 2": false,
    },
  );

  const { state: gridPanel, dispatch: dispatchGridLayout } = usePanelValue();

  const { state: workouts, dispatch: dispatchWorkout } = useWorkoutValue();

  useEffect(() => {
    basicWorkouts = workouts;
  }, []);

  useEffect(() => {
    let sortHelper = false;
    let filteredWorkouts: WorkoutsArr = [];

    Object.entries(sortState).forEach(([key, value], index) => {
      if (value) {
        sortHelper = true;
        filteredWorkouts = [
          ...filteredWorkouts,
          ...basicWorkouts.filter((workout) => workout.name === key),
        ];
      } else if (
        index === Object.entries(sortState).length - 1 &&
        !sortHelper
      ) {
        filteredWorkouts = [...basicWorkouts];
      }
    });

    dispatchWorkout(filteredWorkouts);
  }, [dispatchWorkout, sortState]);

  const handleGridChange = (e: MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;

    setToStorage("grid")(target.value);
    dispatchGridLayout(target.value as GridLayoutType);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleSorting = () => {
    // const target = e.target as HTMLInputElement;
    // setToStorage("grid")(target.value);
    // dispatchGridLayout(target.value as GridLayoutType);
  };

  return (
    <FormControl component="fieldset" variant="standard">
      <SortingGroup>
        {workoutNames.map((name) => (
          <FormControlLabel
            key={name}
            control={
              <StyledCheckbox
                checked={sortState[name]}
                onChange={handleChange}
                name={name}
              />
            }
            label={name}
          />
        ))}
      </SortingGroup>

      <SortingGroupIcons>
        <DateSortingGroup>
          <SortIcon sx={{ marginRight: 2 }} />
          <ToggleButtonGroup
            exclusive
            onChange={handleSorting}
            aria-label="Platform"
          >
            <StyledToggleButton value="android">
              <ArrowDownwardIcon />
            </StyledToggleButton>
            <StyledToggleButton value="android">
              <ArrowUpwardIcon />
            </StyledToggleButton>
          </ToggleButtonGroup>
        </DateSortingGroup>

        <ToggleButtonGroup
          exclusive
          onChange={handleGridChange}
          aria-label="Platform"
        >
          <StyledToggleButton selected={gridPanel === "2"} value="2">
            <GridViewIcon />
          </StyledToggleButton>
          <StyledToggleButton selected={gridPanel === "1"} value="1">
             // <SplitScreenIcon />
          </StyledToggleButton>
        </ToggleButtonGroup>
      </SortingGroupIcons>
    </FormControl>
  );
}

export default SortingPanel;
