import EditIcon from "@mui/icons-material/Edit";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Retreat } from "../../admin/types/retreatTypes";
import { RetreatActionButton } from "./RetreatActionButton";

interface Props {
  retreat: Retreat;
  editable?: boolean;
}

const daysOfWeekHebrew = [
  "ראשון",
  "שני",
  "שלישי",
  "רביעי",
  "חמישי",
  "שישי",
  "שבת",
];
const generateDateWithDayHebrew = (date: Date) => {
  return `יום ${daysOfWeekHebrew[date.getDay()]} ${date.toLocaleDateString(
    "en-GB"
  )}`;
};

const RetreatCard: React.FC<Props> = ({ retreat, editable }) => {
  return (
    <Card sx={{ overflow: "visible", height: "100%" }}>
      <CardMedia
        component="img"
        height="160"
        sx={{
          borderRadius: 1,
          display: "inline-block",
          backgroundColor: "transparent",
          width: "87%",
          marginTop: "-5em",
          justifySelf: "center",
        }}
        image={retreat.imageSrc}
        alt="..."
      />
      <CardContent>
        <Typography variant="h5" textAlign="start">
          {retreat.name}
        </Typography>
        <Typography variant="subtitle1" textAlign="start">
          {retreat.destination}
        </Typography>
        <Typography variant="body1" textAlign="start">
          <Typography
            variant="body1"
            textAlign="start"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: "2",
              WebkitBoxOrient: "vertical",
              minHeight: "3em",
            }}
          >
            {retreat.description}
          </Typography>
        </Typography>
        <Divider sx={{ margin: "revert" }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          {" "}
          <Typography variant="caption" fontWeight="bold">
            התחלה
          </Typography>
          <Typography variant="caption">
            {generateDateWithDayHebrew(retreat.startDate.toDate())}
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="caption" fontWeight="bold">
            סיום
          </Typography>
          <Typography variant="caption">
            {generateDateWithDayHebrew(retreat.endDate.toDate())}
          </Typography>
        </Stack>
        <Typography
          variant="body1"
          fontWeight="bold"
        >{`${retreat.avilableParticipantsAmount}/${retreat.maximumParticipantsAmount} מקומות נותרו`}</Typography>
      </CardContent>
      <CardActions>
        <Stack direction="row" flexGrow={1}>
          <RetreatActionButton status={retreat.status} />
          {editable && (
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
};

export { RetreatCard };
