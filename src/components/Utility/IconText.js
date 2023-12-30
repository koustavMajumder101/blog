import { Stack, Typography } from "@mui/material";
import React from "react";

function IconText({ icon, children, gap }) {
  return (
    <Stack direction="row" gap={gap ? gap : 1} alignItems="center">
      {icon}
      <Typography variant="body1">{children}</Typography>
    </Stack>
  );
}

export default IconText;
