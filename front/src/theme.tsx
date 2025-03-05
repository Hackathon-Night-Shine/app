import { createTheme } from "@mui/material";

export const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#f4511e", // Warm orange
    },
    secondary: {
      main: "#795548", // Warm brown
    },
    background: {
      default: "#ffffff",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Rubik", sans-serif',
  },
  components: {
    MuiDialog: {
      styleOverrides: {
        paper: {
          maxWidth: "fit-content",
          borderRadius: 16,
          padding: "16px",
          background: "linear-gradient(135deg, #fff3e0 0%, #fff8e1 100%)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.08)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(135deg, rgba(244, 81, 30, 0.05) 0%, rgba(121, 85, 72, 0.05) 100%)",
            borderRadius: 16,
            pointerEvents: "none",
          },
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem",
          color: "#795548",
          fontWeight: 600,
          padding: "16px 24px",
          textAlign: "right",
          direction: "rtl",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          direction: "rtl",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            backgroundColor: "rgba(255, 255, 255, 0.8)",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
            },
            "&.Mui-focused": {
              backgroundColor: "#ffffff",
            },
            "&:hover fieldset": {
              borderColor: "#f4511e",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#795548",
            right: 27,
            left: "auto",
            transformOrigin: "right",
          },
          marginBottom: "16px",
          "& .MuiFormLabel-root": {
            right: 27,
            left: "auto",
            transformOrigin: "right",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            textAlign: "right",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          padding: "8px 24px",
          fontSize: "1rem",
        },
        contained: {
          backgroundColor: "#f4511e",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#e64a19",
          },
        },
        text: {
          color: "#795548",
          "&:hover": {
            backgroundColor: "rgba(121, 85, 72, 0.08)",
          },
        },
        startIcon: {
          marginLeft: ".25em",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          direction: "rtl",
          textAlign: "right",
        },
      },
    },
  },
});
