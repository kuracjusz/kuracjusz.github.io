import styled from "@emotion/styled";
import { Button, Theme } from "@mui/material";

export const AddWorkoutButton = styled(Button)<{ theme?: Theme }>(
  ({ theme }) => ({
    backgroundColor: theme.palette.success.main,
    textTransform: "none",
    color: theme.palette.common.white,
    gap: 4,
  }),
);

export const Container = styled("div")({
  // position: "fixed",
  // left: 80,
  top: 80,
  position: "sticky",

  alignItems: "center",
  flexDirection: "column",
  display: "flex",
});

export const Panel = styled("div")({
  flex: 1,
  backgroundColor: "#222",

  borderRight: "2px solid #333",
  padding: "0 8px",
});
