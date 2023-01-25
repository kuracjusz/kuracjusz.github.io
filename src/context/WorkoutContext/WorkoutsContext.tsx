import { WorkoutsArr } from "../../modules/Workouts/types";
import { getWorkoutsFromStorage } from "../../services/storageService";

import createCtx from "../contextGeneric";

const localStorageWorkouts = getWorkoutsFromStorage();

export const [useWorkoutValue, WorkoutProvider] =
  createCtx<WorkoutsArr>(localStorageWorkouts);
