import styled from "@emotion/styled";
import { Theme } from "@mui/material";
import { GridLayoutType } from "../../context/PanelContext";

export const Container = styled("div")<{
  theme?: Theme;
  gridLayout: GridLayoutType;
}>(({ theme, gridLayout }) => ({
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: `repeat(${gridLayout}, auto)`,
  },

  gap: 24,
  display: "grid",
  gridTemplateColumns: "repeat(1, auto)",
}));

export const WorkoutsPanel = styled("div")({
  flex: 6,
  display: "flex",
  margin: "60px 0",
  flexDirection: "column",
  padding: "0 32px",
  alignItems: "center",
});

export const Card = styled("div")({});
