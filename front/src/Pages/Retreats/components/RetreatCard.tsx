import EditIcon from "@mui/icons-material/Edit";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { useDialogs } from "@toolpad/core";
import { Retreat } from "../../../../types/retreat";
import { generateDateWithDayHebrew } from "../../../utils/dateUtils";
import { ExpandedRetreatDialog } from "./ExpandedRetreatDialog";
import { ManageRetreatDialog } from "./ManageRetreatDialog";
import { RetreatActionButton } from "./RetreatActionButton";

interface Props {
  retreat: Retreat;
  editable?: boolean;
}

const EXCLUDED_EXPANSIONS_CLASSES = ".MuiButtonBase-root";

const RetreatCard: React.FC<Props> = ({ retreat, editable }) => {
  const dialogs = useDialogs();

  const handleExpandRetreat = async () => {
    await dialogs.open(ExpandedRetreatDialog, retreat);
  };

  const handleEditRetreat = async () => {
    const editedRetreat = await dialogs.open(ManageRetreatDialog, retreat);
  };

  return (
    <Card
      sx={{ overflow: "visible", height: "100%" }}
      onClick={(e: { target: { closest: (arg0: string) => any } }) => {
        if (!editable && !e.target.closest(EXCLUDED_EXPANSIONS_CLASSES)) {
          handleExpandRetreat();
        }
      }}
      zIndex={0}
    >
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
        image={retreat.img ?? "./assets/no_image.png"}
      />
      <CardContent>
        <Typography variant="h5" textAlign="start">
          {retreat.name}
        </Typography>
        <Typography variant="subtitle1" textAlign="start">
          {retreat.address}
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
        {/* <Stack
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
        </Stack> */}
        <Typography
          variant="body1"
          fontWeight="bold"
          style={{ marginTop: '10px'}}
        >{`${retreat.avilableParticipantsAmount}/${retreat.capacity} מקומות נותרו`}</Typography>
      </CardContent>
      <CardActions>
        {!editable && <RetreatActionButton status={retreat.status} />}
        {editable && (
          <Button
            sx={{ borderColor: '#f8b377'}}
            variant="outlined"
            startIcon={<EditIcon />}
            fullWidth
            disableElevation
            onClick={handleEditRetreat}
          >
            עריכה
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export { EXCLUDED_EXPANSIONS_CLASSES, RetreatCard };
