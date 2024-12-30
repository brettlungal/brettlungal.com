import React from 'react'
import { Typography, Divider, IconButton } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useTheme } from '@mui/material/styles'

const MyInformation: React.FC = () => {
    const theme = useTheme();

    const NavigateTo = ({ text }: {text:string}) => {
        return (<div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
            <Typography sx={{
                cursor: 'pointer',
                color: 'text.primary',
                transition: 'color 0.3s',
                '&:hover': {
                    color: theme.palette.primary[theme.palette.mode],
                },
                marginRight: '2%',
                textDecoration: 'underline'
            }}
            >
                {text}
            </Typography>
            <ArrowForwardIcon />
        </div>)
    }

    return (
        <div style={{marginTop:'20%'}}>
            <Typography variant="h6">
                ABOUT ME
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '2%', marginBottom: '5%' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.</Typography>
            <NavigateTo text={'LEARN MORE'} />
            <Divider sx={{ marginBottom: '10%', marginTop: '10%' }} />

            <Typography variant="h6">
                MY WORK
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: '2%', marginBottom: '5%' }}>Lorem ipsum dolor sit amet consectetur adipiscing elit leo quis ullamcorper quis id elementum convallis lacus gravida.</Typography>
            <NavigateTo text={'BROWSE PORTFOLIO'} />
            <Divider sx={{ marginBottom: '10%', marginTop: '10%' }} />

            <Typography variant="h6" sx={{ marginBottom: '5%' }}>
                FOLLOW ME
            </Typography>
            <IconButton href="https://www.linkedin.com/in/brettlungal" target="_blank">
                <LinkedInIcon fontSize="large"/>
            </IconButton>
            <IconButton href="https://github.com/brettlungal" target="_blank">
                <GitHubIcon fontSize="large"/>
            </IconButton>

        </div>
    )
}

export default MyInformation;