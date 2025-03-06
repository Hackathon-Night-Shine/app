import { Button, Card } from "@mui/material";
import { useDialogs } from "@toolpad/core/useDialogs";
import moment from "moment";
import { useEffect, useState } from "react";
import { RetreatManagementList } from "./components/RetreatList";
import { LocallyCreatedRetreat, Retreat } from "../../../types/retreatTypes";
import { ManageRetreatDialog } from "./components/ManageRetreatDialog";

const retreats: Retreat[] = [
  {
    id: 1,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "דוגמה מספר 1",
    description: "בלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלה",
    destination: "אנה פרנק 40, בת ים.",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "PENDING",
  },
  {
    id: 2,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "דוגמה מספר 2",
    description: "בלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלה",
    destination: "אנה פרנק 40, בת ים.",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "APPROVED",
  },
  {
    id: 3,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "דוגמה מספר 3",
    description: "בלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלה",
    destination: "אנה פרנק 40, בת ים.",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "DENIED",
  },
  {
    id: 4,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "דוגמה מספר 4",
    description: "בלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלהבלה",
    destination: "אנה פרנק 40, בת ים.",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "PROCESSING",
  },
];

const RetreatManagementPage = () => {
  const dialogs = useDialogs();
  const [retreatsArr, setRetreatsArr] = useState(retreats);
  const [locallyCreatedRetreat, setLocallyCreatedRetreat] =
    useState<LocallyCreatedRetreat>();
  const isAdmin = false;

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
    <div style={{ backgroundColor: "F9F6F0"}}>
      <Card style={{ display: "flex", flexDirection: "column" }}>
        {isAdmin && (
          <Button variant="contained" onClick={handleCreateRetreatClick}>
            הוסף ריטריט
          </Button>
        )}
        <RetreatManagementList
          retreats={retreatsArr}
          pendingRetreat={locallyCreatedRetreat}
          editable={isAdmin}
        />
      </Card>
    </div>
  );
};

export { RetreatManagementPage };
