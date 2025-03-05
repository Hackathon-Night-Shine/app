import { Dialog, DialogContent, Stack, Typography } from "@mui/material";
import { DialogProps } from "@toolpad/core/useDialogs";
import { RetreatActionButton } from "../../../components/retreats/RetreatActionButton";
import { generateDateWithDayHebrew } from "../../../utils/dateUtils";
import { Retreat } from "../../types/retreatTypes";

const ExpandedRetreatDialog: React.FC<DialogProps<Retreat>> = ({
  open,
  payload,
  onClose,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <Stack direction="row" gap={20}>
          <Stack direction="column">
            <Typography variant="h5">{payload.name}</Typography>
            <Typography variant="subtitle1">{payload.destination}</Typography>
            <Typography variant="caption">
              {generateDateWithDayHebrew(payload.startDate.toDate())} -{" "}
              {generateDateWithDayHebrew(payload.endDate.toDate())}
            </Typography>
            <Typography variant="body1">{payload.description}</Typography>
          </Stack>
          <Stack direction="column" gap={2}>
            <img
              src={payload.imageSrc}
              height={240}
              width={350}
              style={{ borderRadius: 8 }}
              alt="Retreat"
            />
            <Typography variant="h6" textAlign="center">
              {payload.avilableParticipantsAmount}/
              {payload.maximumParticipantsAmount} מקומות נותרו
            </Typography>
            <RetreatActionButton status={payload.status} />
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export { ExpandedRetreatDialog };
