import { Button, Dialog, DialogContent, Grid2, TextField } from "@mui/material";
import { DialogProps } from "@toolpad/core/useDialogs";
import moment from "moment";
import { useRef, useState } from "react";
import { ImageUploader } from "../../../components/ImageUploader";
import { DatepickerField } from "../../../Pages/Retreats/DatepickerField";
import { LocallyCreatedRetreat, Retreat } from "../../types/retreatTypes";

const ManageRetreatDialog: React.FC<
  DialogProps<
    Retreat | LocallyCreatedRetreat,
    Retreat | LocallyCreatedRetreat | undefined
  >
> = ({ open, payload, onClose }) => {
  const [tempRetreat, setTempRetreat] = useState<
    Retreat | LocallyCreatedRetreat
  >(payload);
  const imageRef = useRef<HTMLInputElement>(null);

  const handleInputfieldChange = (
    fieldName: string,
    transform?: (value: string) => any
  ) => {
    return (e: { target: { value: string } }) =>
      setTempRetreat({
        ...tempRetreat,
        [fieldName]: transform ? transform(e.target.value) : e.target.value,
      });
  };

  const handleDateRangeChange = (
    newRange: [moment.Moment | null, moment.Moment | null]
  ) => {
    setTempRetreat((prevState) =>
      prevState
        ? {
            ...prevState,
            startDate: newRange[0] ?? moment(),
            endDate: newRange[1] ?? moment(),
          }
        : prevState
    );
  };

  const handleImageUpdate = (imageSrc: string) => {
    setTempRetreat((prevState) =>
      prevState ? { ...prevState, imageSrc } : prevState
    );
  };

  return (
    <Dialog open={open} onClose={() => onClose(undefined)}>
      <DialogContent>
        <Grid2 container spacing={2} justifyContent="center">
          <Grid2 direction="column">
            <TextField
              label="שם הריטריט"
              defaultValue={tempRetreat.name}
              onChange={handleInputfieldChange("name")}
              fullWidth
            />
            <TextField
              label="מיקום"
              defaultValue={tempRetreat.destination}
              onChange={handleInputfieldChange("destination")}
              fullWidth
            />

            <DatepickerField
              startDate={tempRetreat.startDate}
              endDate={tempRetreat.endDate}
              onSetRange={handleDateRangeChange}
            />

            <TextField
              label="תיאור"
              defaultValue={tempRetreat.description}
              onChange={handleInputfieldChange("description")}
              rows={5}
              multiline
              fullWidth
            />
          </Grid2>
          <Grid2 direction="column" gap={2} justifyContent="space-around">
            <ImageUploader
              imageRef={imageRef}
              imageSrc={tempRetreat.imageSrc}
              handleSourceUpdate={handleImageUpdate}
            />
            <TextField
              label="מספר משתתפים מקסימלי"
              name="numOfParticipants"
              type="number"
              fullWidth
              value={tempRetreat?.maximumParticipantsAmount}
              onChange={handleInputfieldChange(
                "maximumParticipantsAmount",
                parseInt
              )}
            />
            <Button
              variant="contained"
              onClick={() => onClose(tempRetreat)}
              fullWidth
              disableElevation
            >
              שמירה
            </Button>
          </Grid2>
        </Grid2>
      </DialogContent>
    </Dialog>
  );
};

export { ManageRetreatDialog };
