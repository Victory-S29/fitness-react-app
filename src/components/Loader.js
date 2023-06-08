import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const Loader = () => (
  <Box display="flex" justifyContent="center" alignItems="center" width="100%">
    <CircularProgress color="inherit" />
  </Box>
);

export default Loader;