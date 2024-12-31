import React from 'react'
import { Typography, Box, Divider } from '@mui/material'
import CodeIcon from '@mui/icons-material/Code';
import { useTheme } from '@mui/material/styles'

const Introduction: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <CodeIcon fontSize="large" sx={{ color: `primary.${theme.palette.mode}`, display: 'flex', marginLeft: '7%' }} />
            <Divider variant="middle" sx={{ borderBottomWidth: 5, width: '50%', marginLeft: '7%' }} />
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
        </>
    )
}

export default Introduction;