import styled from "@emotion/styled";
import { Input, TableHead } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";

export const Head = styled(TableHead)({
  ".MuiTableCell-root": {
    fontSize: "24px",
    padding: 20,
  },
  borderBottom: "3px solid white",
  borderColor: "#bbb",
});

export const EditCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    textAlign: "right",
    fontSize: 16,
  },
});

export const StyledTableCell = styled(TableCell)({
  borderColor: "#bbb",
  padding: 8,

  "&:first-of-type": {
    width: "fit-content",
  },
});

export const WorkoutTableWrapper = styled(TableContainer)({
  borderRadius: 10,
  padding: 15,
  backgroundColor: "#333",
});

export const StyledInput = styled(Input)({
  // color: "white",
});

export const DateCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    whiteSpace: "nowrap",
    fontSize: 16,
    padding: 8,
  },
});
