import React from 'react';
import { Grid2 } from '@mui/material';
import Introduction from '../components/Introduction';
import Portrait from '../components/Portrait';
const Home: React.FC = () => {

  return (
    <Grid2
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid2 size={4} textAlign="center" sx={{marginTop:'10%'}}>
        <Introduction />
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Portrait />
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        
      </Grid2>
    </Grid2>
  );
};

export default Home;
