import AddIcon from "@mui/icons-material/Add";
import { ConfigModal } from "../ConfigModal";
import SortingPanel from "../SortingPanel";
import { AddWorkoutButton, Container, Panel } from "./SidePanel.view";

import useModal from "./useModal";

function SidePanel() {
  const [open, handleClose, handleOpen] = useModal();

  return (
    <Panel>
      <Container>
        <AddWorkoutButton
          variant="outlined"
          onClick={handleOpen}
          color="success"
        >
          <AddIcon />
          add workout
        </AddWorkoutButton>
        <SortingPanel />
      </Container>

      <ConfigModal handleClose={handleClose} open={open} />
    </Panel>
  );
}

export default SidePanel;
