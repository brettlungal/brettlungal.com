import React from 'react';
import { Typography, Grid2, Paper, Box, Divider } from '@mui/material'
import {useTheme} from '@mui/material/styles'
import CodeIcon from '@mui/icons-material/Code';

import Portrait from '../components/Portrait'
const Home: React.FC = () => {
  const theme = useTheme();

  return (
    <Grid2
      container
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Grid2 size={4} textAlign="center" sx={{marginTop:'10%'}}>
        <CodeIcon fontSize="large" sx={{color:`primary.${theme.palette.mode}`, display:'flex', marginLeft:'7%'}}/>
        <Divider variant="middle" sx={{ borderBottomWidth: 5, width:'50%', marginLeft:'7%' }} />
        <Typography variant="h2">
          Hey I'm{' '}
          <Box
            component="span"
            sx={{
              color: `primary.${theme.palette.mode}`,
              fontWeight: 'bold',
            }}
          >
            Brett
          </Box>
            , A Software Developer
        </Typography>
        <Typography variant="subtitle2" sx={{display:'flex', marginLeft:'7%', marginTop:'8%'}}>I like to build scalable, performant solutions primarily focusing on backend development. I am a self-starter and leader which has helped me succeed in my current position as a lead developer at QDoc Inc. </Typography>
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Portrait  />
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        
      </Grid2>
    </Grid2>
  );
};

export default Home;
