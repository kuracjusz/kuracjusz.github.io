import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import { ChangeEvent, ChangeEventHandler, useEffect, useState } from "react";
import { FormControl, MenuItem, SelectChangeEvent } from "@mui/material";
import { format } from "date-fns";
import {
  DateCell,
  EditCell,
  Head,
  StyledInput,
  StyledTableCell,
  WorkoutTableWrapper,
} from "./WorkoutTable.view";
import { WorkoutSelect } from "../ConfigModal/ConfigModal.view";
import { WorkoutType } from "../Workouts/types";

import { workoutFromDialog, workoutNames } from "../../helpers/workoutHelper";
import Exercise from "./Exercise";

export const handleInputChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  rowIndex: number,
  cellIndex: number,
  workout: WorkoutType,
) => {
  const working = { ...workout };
  working.exercises[rowIndex][cellIndex] = e.target.value;
  return working;
};

type TablesProps = {
  workout: WorkoutType;
  editable?: boolean;
  handleFnsInput?: ChangeEventHandler;
  handleNameChange?: (event: SelectChangeEvent<unknown>) => void;
  handleModalOpen?: (id: string) => void;
};

export default function WorkoutTable({
  handleFnsInput,
  handleNameChange,
  editable,
  workout,
  handleModalOpen,
}: TablesProps) {
  const [editIconVisible, setEditIconVisible] = useState(false);
  const dateFormat = format(new Date(), "yyyy-MM-dd");

  useEffect(() => {
    workoutFromDialog.name = workout.name;
    workoutFromDialog.exercises = workout.exercises;
  }, [workout.exercises, workout.name]);

  return (
    <WorkoutTableWrapper
      onMouseLeave={() => setEditIconVisible(false)}
      onMouseEnter={() => {
        setEditIconVisible(true);
      }}
    >
      <Table aria-label="simple table">
        <Head className="">
          <TableRow>
            <StyledTableCell colSpan={2}>
              {editable ? (
                <FormControl>
                  <WorkoutSelect
                    labelId="selectLabel"
                    id="workoutSchema"
                    onChange={handleNameChange}
                    value={workout.name}
                    label="workout"
                    variant="standard"
                  >
                    {workoutNames.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </WorkoutSelect>
                </FormControl>
              ) : (
                workout.name
              )}
            </StyledTableCell>
            <DateCell>
              {
                editable ? (
                  <StyledInput
                    type="date"
                    defaultValue={dateFormat}
                    onChange={handleFnsInput}
                  />
                ) : typeof workout.date === "string" ? (
                  workout.date
                ) : (
                  format(workout.date, "dd-MM-yyyy")
                ) //    make all dates on Date type
              }
            </DateCell>
            {editIconVisible && !editable && (
              <EditCell colSpan={3}>
                <button
                  onClick={() =>
                    handleModalOpen?.(
                      typeof workout.id === "string" ? workout.id : "",
                    )
                  }
                  type="button"
                >
                  make it different
                </button>
              </EditCell>
            )}
          </TableRow>
        </Head>
        <TableBody>
          {workout.exercises.map((exercise, rowIndex) => (
            /* eslint-disable react/no-array-index-key  */
            <Exercise
              editable={editable}
              rowIndex={rowIndex}
              key={rowIndex}
              exercise={exercise}
            />
          ))}
        </TableBody>
      </Table>
    </WorkoutTableWrapper>
  );
}
