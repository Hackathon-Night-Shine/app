import { Button, Card } from "@mui/material";
import moment from "moment";
import { useState } from "react";
import { Retreat } from "../types/retreatTypes";
import AddRetreatPopup from "./AddRetreatPopUp";
import { RetreatManagementList } from "./components/RetreatList";

export type Retreat = {
  imageSrc: string;
  name: string;
  description: string;
  destination: string;
  createDate: Date;
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  numOfParticipants: number;
};

const retreats: Retreat[] = [
  {
    imageSrc: "https://example.com/image1.jpg",
    name: "Mountain Retreat",
    description: "A peaceful retreat in the mountains.",
    destination: "Mountain",
    createDate: new Date("2023-01-01"),
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    numOfParticipants: 0,
  },
  {
    imageSrc: "https://example.com/image2.jpg",
    name: "Beach Retreat",
    description: "A relaxing retreat by the beach.",
    destination: "Mountain",
    createDate: new Date("2023-02-01"),
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    numOfParticipants: 0,
  },
];

const RetreatManagementPage = () => {
  const [retreatsArr, setRetreatsArr] = useState(retreats);
  const [isAddRetreatPopupOpen, setIsAddRetreatPopupOpen] = useState(false);

  return (
    <Card style={{ display: "flex", flexDirection: "column" }}>
      <Button
        variant="contained"
        onClick={() => setIsAddRetreatPopupOpen(true)}
      >
        הוסף ריטריט
      </Button>
      {isAddRetreatPopupOpen && (
        <AddRetreatPopup
          onClose={() => setIsAddRetreatPopupOpen(false)}
          setRetreats={setRetreatsArr}
        />
      )}
      <RetreatManagementList retreats={retreats} editable />
    </Card>
  );
};

export { RetreatManagementPage };
