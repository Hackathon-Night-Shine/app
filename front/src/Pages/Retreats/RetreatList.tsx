import { CircularProgress, Grid2 } from "@mui/material";
import React, { useMemo } from "react";
import { LocallyCreatedRetreat, Retreat } from "../../admin/types/retreatTypes";
import { RetreatCard } from "./RetreatCard";

interface Props {
  retreats: Retreat[];
  pendingRetreat?: LocallyCreatedRetreat;
  editable?: boolean;
}

const RetreatManagementList: React.FC<Props> = ({
  retreats,
  pendingRetreat,
  editable,
}) => {
  const tempPendingRetreat: Retreat | undefined = useMemo(
    () =>
      pendingRetreat
        ? { ...pendingRetreat, id: -1, avilableParticipantsAmount: -1 }
        : undefined,
    [pendingRetreat]
  );

  return (
    <Grid2
      container
      rowSpacing={12}
      columnSpacing={6}
      padding={2}
      sx={{ marginTop: "5em" }}
    >
      {tempPendingRetreat && (
        <Grid2 size={3} sx={{ position: "relative", pointerEvents: "none" }}>
          <RetreatCard retreat={tempPendingRetreat} editable={editable} />
          <CircularProgress
            size={48}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              marginTop: "-24px",
              marginLeft: "-24px",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(255, 255, 255, 0.7)",
              zIndex: 1,
            }}
          />
        </Grid2>
      )}
      {retreats.map((retreat, index) => (
        <Grid2 key={index} size={3}>
          <RetreatCard retreat={retreat} editable={editable} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export { RetreatManagementList };
