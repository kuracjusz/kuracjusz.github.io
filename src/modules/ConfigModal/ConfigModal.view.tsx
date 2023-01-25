import { Button, Dialog, Select, styled } from "@mui/material";

export const DialogButton = styled(Button)({
  padding: "10px 15px",
  borderRadius: 5,
});

export const DialogStyled = styled(Dialog)({
  ".MuiPaper-root": {
    backgroundColor: "#111",
    padding: 10,
    maxWidth: "100%",
    borderRadius: 10,
  },
});

export const WorkoutSelect = styled(Select)({
  fontSize: 20,
});

export const DialogHead = styled("div")({
  display: "flex",
  alignItems: "center",
});
