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
            <Typography variant="body1" sx={{ display: 'flex', marginLeft: '7%', marginTop: '8%' }}>I like to build scalable, performant solutions primarily focusing on backend development. I am a self-starter and leader which has helped me succeed in my current position as a lead developer at QDoc Inc. </Typography>
        </>
    )
}

export default Introduction;