import DialogTitle from "@mui/material/DialogTitle";

import React, { ChangeEvent, useState } from "react";
import { DialogActions, SelectChangeEvent } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { DialogButton, DialogHead, DialogStyled } from "./ConfigModal.view";

import {
  getWorkoutsFromStorage,
  setWorkoutsToStorage,
} from "../../services/storageService";
import { WorkoutNamesType, WorkoutType } from "../Workouts/types";
import { getPreviousWorkout, workoutNames } from "../../helpers/workoutHelper";
import { useWorkoutValue } from "../../context/WorkoutContext";
import WorkoutTable, { workoutFromDialog } from "../WorkoutTable/WorkoutTable";

export interface SimpleDialogProps {
  buttonHandler?: () => void;
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, children, buttonHandler, open } = props;

  return (
    <DialogStyled onClose={onClose} open={open}>
      <DialogHead>
        <DialogTitle>Set backup account</DialogTitle>
      </DialogHead>

      {children}
      <DialogActions>
        <DialogButton
          variant="text"
          onClick={buttonHandler ?? buttonHandler}
          color="primary"
          type="submit"
          size="large"
        >
          Add Workout
        </DialogButton>
      </DialogActions>
    </DialogStyled>
  );
}

type ConfigModalProps = {
  handleClose: () => void;
  open: boolean;
};

const previousWorkout = getPreviousWorkout(
  getWorkoutsFromStorage(),
  workoutNames[1],
);

function ConfigModal({ handleClose, open }: ConfigModalProps) {
  const { dispatch: dispatchWorkout } = useWorkoutValue();

  const [workout, setWorkout] = useState<WorkoutType>(previousWorkout);

  const handleSelectChange = (e: SelectChangeEvent<unknown>) => {
    setWorkout(
      getPreviousWorkout(
        getWorkoutsFromStorage(),
        e.target.value as WorkoutNamesType,
      ),
    );
  };

  const buttonHandler = () => {
    const arr = getWorkoutsFromStorage();
    workoutFromDialog.id = uuidv4();
    arr.push(workoutFromDialog);

    dispatchWorkout(arr);
    setWorkoutsToStorage(arr);

    handleClose();
  };

  const handleFnsInput = (e: ChangeEvent<HTMLInputElement>) => {
    workoutFromDialog.date = e.target.valueAsDate ?? new Date();
  };

  return (
    <SimpleDialog
      buttonHandler={buttonHandler}
      open={open}
      onClose={handleClose}
    >
      <WorkoutTable
        workout={workout}
        handleNameChange={handleSelectChange}
        editable
        handleFnsInput={handleFnsInput}
      />
    </SimpleDialog>
  );
}

export default ConfigModal;
