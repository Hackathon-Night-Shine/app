import { Button, Card } from "@mui/material";
import { useDialogs } from "@toolpad/core/useDialogs";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { LocallyCreatedRetreat, Retreat } from "../../admin/types/retreatTypes";
import { ManageRetreatDialog } from "./components/ManageRetreatDialog";
import { RetreatManagementList } from "./components/RetreatList";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useQuery } from '@tanstack/react-query';
import { getRetreats } from "../../Api/api";

type RetreatManagementPageProps = {
  isAdmin: boolean;
}
const RetreatManagementPage: React.FC <RetreatManagementPageProps> = ({isAdmin}) => {
  const { data, isSuccess, error } = useQuery({ queryKey: ['retreats'], queryFn: getRetreats });

  const dialogs = useDialogs();
  const [locallyCreatedRetreat, setLocallyCreatedRetreat] = useState<LocallyCreatedRetreat>();

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

  // useEffect(() => {
  //   setTimeout(() => {
  //     setRetreatsArr((prevState) =>
  //       locallyCreatedRetreat
  //         ? [
  //             ...prevState,
  //             {
  //               ...locallyCreatedRetreat,
  //               avilableParticipantsAmount:
  //                 locallyCreatedRetreat.maximumParticipantsAmount,
  //               id: prevState.length + 1,
  //             },
  //           ]
  //         : prevState
  //     );

  //     setLocallyCreatedRetreat(undefined);
  //   }, 1000);
  // }, [locallyCreatedRetreat]);

  return (
    <Card style={{ display: "flex", flexDirection: "column", backgroundColor: '#F9F6F0', gap: '10px', padding: '10px' }}>
      {isAdmin && (
        <Button variant="contained" style={{ width: '25%', display: 'flex', gap: '4px', margin: 'auto' }} onClick={handleCreateRetreatClick}>
          להוספת אירוע חדש
          <AddCircleIcon/>
        </Button>
      )}
      {isSuccess 
        ? <RetreatManagementList
            retreats={data}
            pendingRetreat={locallyCreatedRetreat}
            editable={isAdmin}
          />
        : <h1>{error?.message}</h1>}
      
    </Card>
  );
};

export { RetreatManagementPage };
