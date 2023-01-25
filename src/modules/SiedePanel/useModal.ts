import { useState } from "react";

const useModal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return [open, handleClose, handleOpen] as const;
};

export default useModal;
