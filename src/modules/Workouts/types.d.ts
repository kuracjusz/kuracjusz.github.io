export type Exercise = Array<string | number | undefined>;

export type WorkoutType = {
  date: Date;
  exercises: Array<Exercise>;
  id: string | undefined;
  name: WorkoutNamesType;
};

export type WorkoutsArr = Array<WorkoutType>;

// export type WorkoutNamesType = (typeof workoutNames)[number];
export type WorkoutNamesType = "Upper 1" | "Upper 2" | "Lower 1" | "Lower 2";
