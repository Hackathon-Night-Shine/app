import { Button } from "@mui/material";
import { Retreat } from "../types/retreatTypes";
import { RetreatManagementList } from "./components/RetreatList";

const retreats: Retreat[] = [
  {
    id: 1,
    name: "נסיגת הרים",
    description: "נסיגה שקטה בהרים.",
    imageSrc:
      "https://www.faughnfamily.com/wp-content/uploads/2010/07/retreat-sign.jpg",
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-01-07"),
    destination: "הרים",
    maximumParticipantsAmount: 20,
    avilableParticipantsAmount: 15,
    status: "open",
  },
  {
    id: 2,
    name: "נסיגת חוף",
    description: "נסיגה מרגיעה ליד החוף.",
    imageSrc:
      "https://www.faughnfamily.com/wp-content/uploads/2010/07/retreat-sign.jpg",
    startDate: new Date("2023-02-01"),
    endDate: new Date("2023-02-07"),
    destination: "חוף",
    maximumParticipantsAmount: 25,
    avilableParticipantsAmount: 20,
    status: "open",
  },
  {
    id: 3,
    name: "נסיגת יער",
    description: "נסיגה שלווה ביער.",
    imageSrc:
      "https://www.faughnfamily.com/wp-content/uploads/2010/07/retreat-sign.jpg",
    startDate: new Date("2023-03-01"),
    endDate: new Date("2023-03-07"),
    destination: "יער",
    maximumParticipantsAmount: 15,
    avilableParticipantsAmount: 10,
    status: "userSigned",
  },
  {
    id: 4,
    name: "נסיגת מדבר",
    description: "נסיגה הרפתקנית במדבר.",
    imageSrc:
      "https://www.faughnfamily.com/wp-content/uploads/2010/07/retreat-sign.jpg",
    startDate: new Date("2023-04-01"),
    endDate: new Date("2023-04-07"),
    destination: "מדבר",
    maximumParticipantsAmount: 30,
    avilableParticipantsAmount: 25,
    status: "closed",
  },
  {
    id: 5,
    name: "נסיגת אגם",
    description: "נסיגה רגועה ליד האגם.",
    imageSrc:
      "https://www.faughnfamily.com/wp-content/uploads/2010/07/retreat-sign.jpg",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-05-07"),
    destination: "אגם",
    maximumParticipantsAmount: 20,
    avilableParticipantsAmount: 18,
    status: "open",
  },
  {
    id: 6,
    name: "נסיגת עיר",
    description: "נסיגה תוססת בעיר.",
    imageSrc:
      "https://www.faughnfamily.com/wp-content/uploads/2010/07/retreat-sign.jpg",
    startDate: new Date("2023-06-01"),
    endDate: new Date("2023-06-07"),
    destination: "עיר",
    maximumParticipantsAmount: 40,
    avilableParticipantsAmount: 35,
    status: "open",
  },
  {
    id: 7,
    name: "נסיגת כפר",
    description:
      " בלה בלה בלהלב הלהלבלהנלחבה בהלחבהךלחבהךלחבה בהךלבחהךבלהחבךה בהךלבחהךבלחהבךלנסיגה מקסימה בכפר.",
    imageSrc:
      "https://www.faughnfamily.com/wp-content/uploads/2010/07/retreat-sign.jpg",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-07-07"),
    destination: "כפר",
    maximumParticipantsAmount: 25,
    avilableParticipantsAmount: 20,
    status: "open",
  },
];

const RetreatManagementPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button>הוספה</Button>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
        }}
      >
        <RetreatManagementList retreats={retreats} editable />
      </div>
    </div>
  );
};

export { RetreatManagementPage };
