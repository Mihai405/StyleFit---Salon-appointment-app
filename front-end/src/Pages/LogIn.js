import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { StyledButton, theme } from "../styles/Styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import Link from "@mui/material/Link";

const CustomInputField = styled(TextField)({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "100px",
  "& input": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      border: "none",
    },
  },
});

export default function LogIn() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <StyledButton onClick={handleClickOpen}>Log In</StyledButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Grid container sx={{ mt: 15, mb: 12 }}>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Typography
                variant="h3"
                sx={{ color: theme.palette.primary.main }}
              >
                Welcome Back
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", m: 1 }}
            >
              <Typography
                variant="subtitle1"
                sx={{ color: theme.palette.primary.main }}
              >
                Log in to your account
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", m: 1 }}
            >
              <CustomInputField sx={{ px: 2 }}></CustomInputField>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "center", m: 1 }}
            >
              <CustomInputField sx={{ px: 2 }}></CustomInputField>
            </Grid>
            <Grid
              item
              xs={12}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Link
                xs={6}
                underline="hover"
                component="button"
                variant="subtitle2"
              >
                Forgot Password
              </Link>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}
