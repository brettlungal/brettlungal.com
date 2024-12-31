import React from 'react';
import { Grid2, Typography, Divider } from '@mui/material';

const Contact: React.FC = () => {

    return (
        <Grid2
            container
            spacing={1}
            justifyContent="center"
            alignItems="center"
        >
            <Grid2 size={12} display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h2">Contact</Typography>
                <Divider />
            </Grid2>

        </Grid2>
    );
};

export default Contact;