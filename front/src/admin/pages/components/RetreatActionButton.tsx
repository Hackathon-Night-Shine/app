import { Button, ButtonProps } from "@mui/material";
import React, { memo } from "react";
import { RetreatStatus } from "../../types/retreatTypes";

interface Props {
  status: RetreatStatus;
}

const RetreatStatusText: Record<RetreatStatus, string> = {
  open: "להרשמה",
  userSigned: "לביטול",
  closed: "ההרשמה סגורה",
  full: "מלא",
};

const retreatStatusColor: Partial<Record<RetreatStatus, string>> = {
  userSigned: "#F5B074",
};

const additionalProps: Partial<Record<RetreatStatus, ButtonProps>> = {
  closed: { disabled: true },
  full: { disabled: true },
};

const RetreatActionButton: React.FC<Props> = memo(({ status }) => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: retreatStatusColor[status] }}
      disableElevation
      fullWidth
      {...additionalProps[status]}
    >
      {RetreatStatusText[status]}
    </Button>
  );
});

export { RetreatActionButton };
