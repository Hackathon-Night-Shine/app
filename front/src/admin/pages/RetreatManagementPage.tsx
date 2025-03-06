import { Button, Card } from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";
import { RetreatManagementList } from "../../components/retreats/RetreatList";
import { LocallyCreatedRetreat, Retreat } from "../types/retreatTypes";
import AddRetreatPopup from "./components/AddRetreatPopUp";

const retreats: Retreat[] = [
  {
    id: 1,
    imageSrc: "https://example.com/image1.jpg",
    name: "Mountain Retreat",
    description: "A peaceful retreat in the mountains.",
    destination: "Mountain",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "open",
  },
  {
    id: 2,
    imageSrc: "https://example.com/image2.jpg",
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
  const [retreatsArr, setRetreatsArr] = useState(retreats);
  const [locallyCreatedRetreat, setLocallyCreatedRetreat] =
    useState<LocallyCreatedRetreat>();
  const [isAddRetreatPopupOpen, setIsAddRetreatPopupOpen] = useState(false);

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
    <Card style={{ display: "flex", flexDirection: "column", width: '100vw' }}>
      <Button
        variant="contained"
        onClick={() => setIsAddRetreatPopupOpen(true)}
      >
        הוסף ריטריט
      </Button>
      {isAddRetreatPopupOpen && (
        <AddRetreatPopup
          onClose={() => setIsAddRetreatPopupOpen(false)}
          setLocalRetreat={setLocallyCreatedRetreat}
        />
      )}
      <RetreatManagementList
        retreats={retreatsArr}
        pendingRetreat={locallyCreatedRetreat}
        editable
      />
    </Card>
  );
};

export { RetreatManagementPage };
