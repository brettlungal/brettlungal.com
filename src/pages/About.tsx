import React from 'react';
import { Grid2, Typography, Divider } from '@mui/material';

const About: React.FC = () => {

    return (
        <Grid2
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
        >
            <Grid2 size={4} />
            <Grid2 size={4} justifyContent="center" alignItems="center" textAlign="center">
            <Typography variant="h2">About</Typography>
                <Divider variant="middle" />
                <Typography variant="body1" sx={{ display: 'flex', marginTop: '5%' }}>I like to build scalable, performant solutions primarily focusing on backend development. I am a self-starter and leader which has helped me succeed in my current position as a lead developer at QDoc Inc. </Typography>
            </Grid2>
            <Grid2 size={4} />

        </Grid2>
    );
};

export default About;