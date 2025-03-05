import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  ThemeProvider,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import moment from "moment";
import { useState } from "react";
import { theme } from "../../../theme";
import { LocallyCreatedRetreat } from "../../types/retreatTypes";

interface AddRetreatPopupProps {
  onClose: () => void;
  setLocalRetreat: React.Dispatch<
    React.SetStateAction<LocallyCreatedRetreat | undefined>
  >;
}

const AddRetreatPopup: React.FC<AddRetreatPopupProps> = ({
  onClose,
  setLocalRetreat,
}) => {
  //Todo: date type instead of current date as default
  const [newRetreat, setNewRetreat] = useState<LocallyCreatedRetreat>({
    name: "",
    description: "",
    destination: "",
    imageSrc: "",
    startDate: moment(),
    endDate: moment(),
    maximumParticipantsAmount: 0,
    status: "open",
  });

  const handleDateRangeChange = (
    newRange: [moment.Moment | null, moment.Moment | null]
  ) => {
    setNewRetreat((prevState) =>
      prevState
        ? {
            ...prevState,
            startDate: newRange[0] ?? moment(),
            endDate: newRange[1] ?? moment(),
          }
        : prevState
    );
  };

  const addRetreat = () => {
    setLocalRetreat(newRetreat);
    onClose();
  };

  return (
    <ThemeProvider theme={theme}>
      <Dialog open>
        <DialogTitle sx={{ display: "flex" }}>יצירת ריטריט חדש</DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "right",
          }}
        >
          <Box>
            <TextField
              margin="dense"
              label="שם הריטריט"
              name="name"
              sx={{ textAlign: "right" }}
              inputProps={{ style: { textAlign: "right" } }}
              fullWidth
              value={newRetreat?.name}
              onChange={(e) =>
                setNewRetreat({ ...newRetreat, name: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="תיאור הריטריט"
              name="description"
              sx={{ textAlign: "right" }}
              inputProps={{ style: { textAlign: "right" } }}
              fullWidth
              value={newRetreat?.description}
              onChange={(e) =>
                setNewRetreat({ ...newRetreat, description: e.target.value })
              }
            />
            <TextField
              margin="dense"
              label="יעד הריטריט"
              name="destination"
              sx={{ textAlign: "right" }}
              inputProps={{ style: { textAlign: "right" } }}
              fullWidth
              value={newRetreat?.destination}
              onChange={(e) =>
                setNewRetreat({ ...newRetreat, destination: e.target.value })
              }
            />

            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DemoContainer
                components={[
                  "DateRangePicker",
                  "MobileDateRangePicker",
                  "DesktopDateRangePicker",
                  "StaticDateRangePicker",
                ]}
              >
                <DemoItem
                  label="בחר את תאריכי הריטריט"
                  component="DateRangePicker"
                >
                  <DateRangePicker
                    value={[newRetreat.startDate, newRetreat.endDate]}
                    onChange={handleDateRangeChange}
                  />
                </DemoItem>
              </DemoContainer>
            </LocalizationProvider>

            <TextField
              margin="dense"
              label="מספר משתתפים מקסימלי"
              name="numOfParticipants"
              type="number"
              fullWidth
              value={newRetreat?.maximumParticipantsAmount}
              onChange={(e) =>
                setNewRetreat({
                  ...newRetreat,
                  maximumParticipantsAmount: parseInt(e.target.value),
                })
              }
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>ביטול</Button>
          <Button onClick={addRetreat} variant="contained">
            שמור ריטריט
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default AddRetreatPopup;
