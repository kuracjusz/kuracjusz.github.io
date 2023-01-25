import { workoutBoiler } from "../helpers/workoutHelper";
import { WorkoutsArr } from "../modules/Workouts/types";

export const getFromStorage = <T>(name: string): T | null => {
  const value = localStorage.getItem(name);
  if (!value || value === "null") return null;

  return JSON.parse(value);
};

export const setToStorage =
  (name: string) =>
  <T>(obj: T) =>
    localStorage.setItem(name, JSON.stringify(obj));

export const setWorkoutsToStorage = setToStorage("workouts");
export const getWorkoutsFromStorage: () => WorkoutsArr = () =>
  getFromStorage("workouts") ?? [workoutBoiler];
