import React from "react";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Loader({ height }: { height?: string }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={height || "100%"}
    >
      <CircularProgress />
    </Box>
  );
}
