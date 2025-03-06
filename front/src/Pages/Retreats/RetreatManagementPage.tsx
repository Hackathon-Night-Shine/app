import { Button, Card } from "@mui/material";
import { useDialogs } from "@toolpad/core/useDialogs";
import moment from "moment";
import { useEffect, useState } from "react";
import { LocallyCreatedRetreat, Retreat } from "../../admin/types/retreatTypes";
import { ManageRetreatDialog } from "./components/ManageRetreatDialog";
import { RetreatManagementList } from "./components/RetreatList";

const retreats: Retreat[] = [
  {
    id: 1,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "ריטריט הרים",
    description:
      "ריטריט שליו בהרים, מוקף בנופים עוצרי נשימה ואוויר צח. המשתתפים ייהנו מהליכות בטבע, סדנאות יוגה ומדיטציה, וארוחות בריאות ומזינות. זהו המקום המושלם להתרחק מהשגרה ולהתחבר לעצמך מחדש.",
    destination: "הרים",
    startDate: moment("2023-01-01"),
    endDate: moment("2023-01-07"),
    avilableParticipantsAmount: 10,
    maximumParticipantsAmount: 20,
    status: "open",
  },
  {
    id: 2,
    imageSrc:
      "https://rukminim3.flixcart.com/image/850/1000/kpcy5jk0/poster/h/c/w/large-village-poster-scenery-scenrym-68-original-imag3m8vrkdztzva.jpeg?q=20&crop=false",
    name: "ריטריט חוף",
    description:
      "ריטריט מרגיע על חוף הים, עם גישה ישירה לחול ולמים. המשתתפים יוכלו להשתתף בפעילויות כמו שחייה, ספורט ימי, וסדנאות יצירה. בנוסף, יהיו מפגשים קבוצתיים לשיתוף חוויות והעצמה אישית. זהו המקום המושלם להירגע ולהתמלא באנרגיות חדשות.",
    destination: "חוף",
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
  );
};

export { RetreatManagementPage };
