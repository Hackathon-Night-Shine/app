import { Button, ButtonProps } from "@mui/material";
import React, { memo } from "react";
import { RetreatStatus } from "../../../admin/types/retreatTypes";

interface Props {
  status: RetreatStatus;
}

const RetreatStatusText: Record<RetreatStatus, string> = {
  closed: "ההרשמה סגורה",
  full: "מלא",
  open: "להרשמה",
  processing: "בתהליך",
  userSigned: "לביטול"
};

const retreatStatusColor: Partial<Record<RetreatStatus, string>> = {
  closed: "#6F7279",
  full: "#6F7279",
  open: "#2364D2",
  processing: "#F5B074",
  userSigned: "#8B0000"
};

const additionalProps: Partial<Record<RetreatStatus, ButtonProps>> = {
  closed: { disabled: true },
  full: { disabled: true },
  processing: { disabled: true },
};

const RetreatActionButton: React.FC<Props> = memo(({ status }) => {
  return (
    <Button
      variant="contained"
      sx={{ backgroundColor: retreatStatusColor[status], 
            '&.Mui-disabled': { backgroundColor: retreatStatusColor[status], color: 'white' }
          }}
      disableElevation
      fullWidth
      {...additionalProps[status]}
    >
      {RetreatStatusText[status]}
    </Button>
  );
});

export { RetreatActionButton };
