import styled from "@emotion/styled";
import { Checkbox, FormGroup, ToggleButton } from "@mui/material";

export const DateSortingGroup = styled("div")({
  display: "flex",
  alignItems: "center",
});

export const SortingGroup = styled(FormGroup)({
  marginTop: "24px",
});

export const SortingGroupIcons = styled(SortingGroup)({
  alignItems: "end",
  gap: 16,
});

export const StyledCheckbox = styled(Checkbox)({
  // color: "#bbb",
});

export const StyledToggleButton = styled(ToggleButton)({
  svg: {
    pointerEvents: "none",
  },

  color: "white",
  borderColor: "rgba(255, 255, 255, 0.12)",
});
