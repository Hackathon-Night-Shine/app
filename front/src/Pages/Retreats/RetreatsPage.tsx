import { Button, Card } from "@mui/material";
import { useDialogs } from "@toolpad/core/useDialogs";
import moment from "moment";
import { useEffect, useState } from "react";
import { LocallyCreatedRetreat, Retreat } from "../../admin/types/retreatTypes";
import { ManageRetreatDialog } from "./components/ManageRetreatDialog";
import { RetreatManagementList } from "./components/RetreatList";
import AddCircleIcon from '@mui/icons-material/AddCircle';

const retreats: Retreat[] = [
  {
    id: 1,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "Mountain Retreat",
    description: "A peaceful retreat in the mountains.",
    destination: "Mountain",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "userSigned",
  },
  {
    id: 2,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "Beach Retreat",
    description: "A relaxing retreat by the beach.",
    destination: "Mountain",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "open",
  },
];

const RetreatManagementPage = () => {
  const dialogs = useDialogs();
  const [retreatsArr, setRetreatsArr] = useState(retreats);
  const [locallyCreatedRetreat, setLocallyCreatedRetreat] =
    useState<LocallyCreatedRetreat>();
  const isAdmin = true;

  const handleCreateRetreatClick = async () => {
    const retreatToCreate = await dialogs.open(ManageRetreatDialog, {
      name: "",
      description: "",
      destination: "",
      imageSrc: "",
      startDate: moment(),
      endDate: moment(),
      maximumParticipantsAmount: 0,
      status: "open",
    });

    if (retreatToCreate) {
      setLocallyCreatedRetreat(retreatToCreate);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setRetreatsArr((prevState) =>
        locallyCreatedRetreat
          ? [
              ...prevState,
              {
                ...locallyCreatedRetreat,
                avilableParticipantsAmount:
                  locallyCreatedRetreat.maximumParticipantsAmount,
                id: prevState.length + 1,
              },
            ]
          : prevState
      );

      setLocallyCreatedRetreat(undefined);
    }, 1000);
  }, [locallyCreatedRetreat]);

  return (
    <Card style={{ display: "flex", flexDirection: "column", backgroundColor: '#F9F6F0', gap: '10px', padding: '10px' }}>
      {isAdmin && (
        <Button variant="contained" style={{ width: '25%', display: 'flex', gap: '4px', margin: 'auto' }} onClick={handleCreateRetreatClick}>
          להוספת אירוע חדש
          <AddCircleIcon/>
        </Button>
      )}
      <RetreatManagementList
        retreats={retreatsArr}
        pendingRetreat={locallyCreatedRetreat}
        editable={isAdmin}
      />
    </Card>
  );
};

export { RetreatManagementPage };
