import { Button, Card } from "@mui/material";
import AddRetreatPopup from "./AddRetreatPopUp";
import { useState } from "react";
import moment from "moment";

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
      <div
        style={{
          backgroundColor: "gray",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100vw",
          height: "100%",
        }}
      >
        {...retreatsArr.map((retreat) => (
          <div>
            <img src={retreat.imageSrc} alt={retreat.name} />
            <h2>{retreat.name}</h2>
            <p>{retreat.description}</p>
            <p>{retreat.createDate.toDateString()}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export { RetreatManagementPage };
