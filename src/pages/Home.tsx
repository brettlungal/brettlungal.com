import React from 'react';
import { Grid2 } from '@mui/material';
import Introduction from '../components/Introduction';
import Portrait from '../components/Portrait';
import MyInformation from '../components/MyInformation';

const Home: React.FC = () => {

  return (
    <Grid2
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid2 size={4} textAlign="center">
        <Introduction />
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Portrait />
      </Grid2>
      <Grid2 justifyContent="center" alignItems="center" size={3}>
        <MyInformation />
      </Grid2>
      <Grid2 size={1}/>
    </Grid2>
  );
};

export default Home;
