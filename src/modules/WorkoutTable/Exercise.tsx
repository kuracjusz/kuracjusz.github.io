import { TableRow } from "@mui/material";
import { Exercise as ExerciseType } from "../Workouts/types";
import { workoutFromDialog } from "./WorkoutTable";
import { StyledInput, StyledTableCell } from "./WorkoutTable.view";

type ExerciseProps = {
  exercise: ExerciseType;
  editable?: boolean;
  rowIndex: number;
};

const Exercise = ({ exercise, editable, rowIndex }: ExerciseProps) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      {exercise.map((cell, cellIndex) => (
        <StyledTableCell
          component="th"
          key={cellIndex.toString() + cell}
          scope="row"
        >
          {editable ? (
            <StyledInput
              defaultValue={cell}
              onChange={(e) => {
                workoutFromDialog.exercises[rowIndex][cellIndex] =
                  e.target.value;
              }}
            />
          ) : (
            cell
          )}
        </StyledTableCell>
      ))}
    </TableRow>
  );
};

export default Exercise;
