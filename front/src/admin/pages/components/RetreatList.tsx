import { Grid2 } from "@mui/material";
import React from "react";
import { Retreat } from "../../types/retreatTypes";
import { RetreatCard } from "./RetreatCard";

interface Props {
  retreats: Retreat[];
  editable?: boolean;
}

const RetreatManagementList: React.FC<Props> = ({ retreats, editable }) => {
  return (
    <Grid2
      container
      rowSpacing={12}
      columnSpacing={6}
      padding={2}
      sx={{ marginTop: "5em" }}
    >
      {retreats.map((retreat, index) => (
        <Grid2 key={index} size={3}>
          <RetreatCard retreat={retreat} editable={editable} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export { RetreatManagementList };
