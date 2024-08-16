import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useSelector } from "react-redux";

const AlertCustom = () => {
  const [open, setOpen] = useState(false);
  const { alert } = useSelector((state) => state.response);

  useEffect(() => {
    if (alert.status !== "idle") {
      setOpen(true);
    }
  }, [alert.status, alert.message, alert.count]);

  if (!open || alert.status == `idle`) return null;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      autoHideDuration={3000}
      onClose={handleClose}
    >
      <Alert
        onClose={handleClose}
        severity={alert.status === "idle" ? "error" : alert.status}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {alert.message}
      </Alert>
    </Snackbar>
  );
};

export default AlertCustom;
