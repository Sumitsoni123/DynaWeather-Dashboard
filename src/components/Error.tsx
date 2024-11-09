import React from "react";
import { Box, Typography } from "@mui/material";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="rgba(255, 0, 0, 0.1)"
      padding={2}
    >
      <Typography variant="h5" color="error">
        {message}
      </Typography>
    </Box>
  );
};

export default Error;
