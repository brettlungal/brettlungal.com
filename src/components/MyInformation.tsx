import React from 'react'
import { Typography, Divider, IconButton, Box } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles'
import {useLocation} from 'wouter';

const MyInformation: React.FC = () => {
    const theme = useTheme();
    const [,navigate] = useLocation();

    const NavigateTo = ({ text, redirectTo }: { text: string, redirectTo: string }) => {
        // TODO - fix the hitbox being right of the text (only on large screens?)
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    cursor: 'pointer',
                    color: 'text.primary',
                    transition: 'color 0.3s',
                    '&:hover': {
                        color: theme.palette.primary[theme.palette.mode],
                    },
                    padding: 0,
                    margin: 0,
                }}
            >
                <Typography onClick={() => {navigate(redirectTo)}} sx={{ marginRight: '2%', textDecoration: 'underline' }}>
                    {text}
                </Typography>
                <ArrowForwardIcon  onClick={() => {navigate(redirectTo)}}/>
            </Box>
        )
    }

    return (
        <div style={{ marginTop: '20%' }}>
            <Typography variant="h6" color={theme.palette.primary[theme.palette.mode]}>
                ABOUT ME
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '2%', marginBottom: '5%' }}>I am a Winnipeg-based software developer with a Bachelor of Science in Computer Science from the University of Manitoba. Coding is not just my profession but also my passion.</Typography>
            <NavigateTo text={'LEARN MORE'} redirectTo={'AboutMe'} />
            <Divider sx={{ marginBottom: '10%', marginTop: '10%' }} />

            <Typography variant="h6" color={theme.palette.primary[theme.palette.mode]}>
                MY WORK
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '2%', marginBottom: '5%' }}>My personal projects span a variety of areas, including an encrypted terminal-based communications application, computer vision, and full-stack web platforms. I am passionate about exploring diverse projects.</Typography>
            <NavigateTo text={'BROWSE PORTFOLIO'} redirectTo={'Portfolio'} />
            <Divider sx={{ marginBottom: '10%', marginTop: '10%' }} />

            <Typography variant="h6" sx={{ marginBottom: '5%' }} color={theme.palette.primary[theme.palette.mode]}>
                FOLLOW ME
            </Typography>
            <IconButton href="https://www.linkedin.com/in/brettlungal" target="_blank">
                <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton href="https://github.com/brettlungal" target="_blank">
                <GitHubIcon fontSize="large" />
            </IconButton>
        </div>
    )
}

export default MyInformation;