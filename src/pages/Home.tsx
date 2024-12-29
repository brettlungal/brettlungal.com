import React from 'react';
import {Typography, Grid2, Paper} from '@mui/material'
const Home: React.FC = () => {
  return (
   <Grid2 container spacing={2}>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Paper elevation={3} sx={{width:'100%', height:'50vh'}}>Grid1</Paper>
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Paper elevation={3} sx={{width:'100%', height:'50vh'}}>Grid2</Paper>
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Paper elevation={3} sx={{width:'100%', height:'50vh'}}>Grid3</Paper>
      </Grid2>
   </Grid2>
  );
};

export default Home;
