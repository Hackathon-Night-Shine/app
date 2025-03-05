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
import { useState } from "react";
import { Retreat } from "./RetreatManagementPage";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DateRangePicker } from "@mui/x-date-pickers-pro";
import moment from "moment";
import { theme } from "../../theme";

interface AddRetreatPopupProps {
  onClose: () => void;
  setRetreats: React.Dispatch<React.SetStateAction<Retreat[]>>;
}

const AddRetreatPopup: React.FC<AddRetreatPopupProps> = ({
  onClose,
  setRetreats,
}) => {
  //Todo: date type instead of current date as default
  const [newRetreat, setNewRetreat] = useState<Retreat>({
    name: "",
    description: "",
    destination: "",
    imageSrc: "",
    createDate: new Date(),
    startDate: null as moment.Moment | null,
    endDate: null as moment.Moment | null,
    numOfParticipants: 0,
  });

  const handleDateRangeChange = (
    newRange: [moment.Moment | null, moment.Moment | null]
  ) => {
    setNewRetreat((prevState) => ({
      ...prevState,
      startDate: newRange[0],
      endDate: newRange[1],
    }));
  };

  const addRetreat = () => {
    setRetreats((prevItems) => [...prevItems, newRetreat]);
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
              value={newRetreat?.numOfParticipants}
              onChange={(e) =>
                setNewRetreat({
                  ...newRetreat,
                  numOfParticipants: parseInt(e.target.value),
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
