import { useState } from "react";
import { Container, WorkoutsPanel } from "./Workouts.view";

import { usePanelValue } from "../../context/PanelContext";
import { useWorkoutValue } from "../../context/WorkoutContext";
import { SimpleDialog } from "../ConfigModal";
import useModal from "../SiedePanel/useModal";
import { workoutBoiler } from "../../helpers/workoutHelper";
import WorkoutTable from "../WorkoutTable/WorkoutTable";

// const WORKOUT_DATA: WorkoutsArr = workoutJSON;

function Workouts() {
  const [open, handleClose, handleOpen] = useModal();
  const { state: gridLayout } = usePanelValue();
  const { state: workouts } = useWorkoutValue();
  const [workoutId, setWorkoutId] = useState<string>();

  // console.log(workouts);

  const dialogWorkout =
    workouts.find((workout) => workout.id === workoutId) ?? workoutBoiler;

  // setWorkoutsToStorage(WORKOUT_DATA);

  const handleModalOpen = (id: string) => {
    setWorkoutId(id);
    handleOpen();
  };

  return (
    <WorkoutsPanel>
      <Container gridLayout={gridLayout}>
        {workouts.map((workout) => (
          <WorkoutTable
            handleModalOpen={handleModalOpen}
            workout={workout}
            key={workout.id}
          />
        ))}
      </Container>
      <SimpleDialog onClose={handleClose} open={open}>
        <WorkoutTable workout={dialogWorkout} editable />
      </SimpleDialog>
    </WorkoutsPanel>
  );
}

export default Workouts;
