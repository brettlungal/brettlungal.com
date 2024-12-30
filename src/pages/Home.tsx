import React from 'react';
import { Typography, Grid2, Paper, Box, Divider } from '@mui/material'
import {useTheme} from '@mui/material/styles'
const Home: React.FC = () => {
  const theme = useTheme();
  console.log(theme)
  return (
    <Grid2
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
    >
      <Grid2 size={4} textAlign="center">
        <Divider variant="middle" sx={{ borderBottomWidth: 5, width:'50%' }} />
        <Typography variant="h3">
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
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Paper elevation={3} sx={{ width: '100%', height: '50vh' }}><Typography>Grid2</Typography></Paper>
      </Grid2>
      <Grid2 display="flex" justifyContent="center" alignItems="center" size={4}>
        <Paper elevation={3} sx={{ width: '100%', height: '50vh' }}><Typography>Grid3</Typography></Paper>
      </Grid2>
    </Grid2>
  );
};

export default Home;
