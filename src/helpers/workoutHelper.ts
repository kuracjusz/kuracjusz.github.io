import { WorkoutNamesType, WorkoutType } from "../modules/Workouts/types";

export const workoutNames = [
  "Upper 1",
  "Upper 2",
  "Lower 1",
  "Lower 2",
] as const;

export const workoutBoiler: WorkoutType = {
  date: new Date(),
  exercises: [],
  name: workoutNames[0],
  id: undefined,
};

export const getPreviousWorkout = (
  workouts: WorkoutType[],
  workoutName: WorkoutNamesType,
) => {
  for (let i = workouts.length - 1; i >= 0; i--) {
    if (workouts[i].name === workoutName) {
      return workouts[i];
    }
  }

  return workoutBoiler;
};
