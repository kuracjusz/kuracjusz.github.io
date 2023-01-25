// import { ThemeProvider } from "@emotion/react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SidePanel } from "./modules/SiedePanel";
import Workouts from "./modules/Workouts/Workouts";
// import { setWorkoutsToStorage } from "./services/storageService";

// import workoutJSON from "./modules/Workouts/workout.json";
// import { WorkoutsArr } from "./modules/Workouts/types";
import { PanelProvider } from "./context/PanelContext";
import { WorkoutProvider } from "./context/WorkoutContext";

// const WORKOUT_DATA: WorkoutsArr = workoutJSON;

function App() {
  // setWorkoutsToStorage(WORKOUT_DATA);

  const theme = createTheme({
    palette: {
      text: {
        secondary: "#eee",
        primary: "#eee",
      },

      primary: {
        main: "#090",
        light: "ff0",
        dark: "#eee",
        contrastText: "#ff0",
      },
      // secondary: { main: "#ff0", light: "ff0", dark: "#eee" },
      // info: {
      //   main: "#ff0",
      //   light: "ff0",
      //   dark: "#eee",
      //   contrastText: "#ff0",
      // },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <PanelProvider>
        <WorkoutProvider>
          <SidePanel />
          <Workouts />
        </WorkoutProvider>
      </PanelProvider>
    </ThemeProvider>
  );
}

export default App;
