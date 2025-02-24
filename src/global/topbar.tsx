import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

const TopBar: React.FC = () => {
  return (
    <Box 
      sx={{
        position: 'fixed',
        width: '100vw',
        maxWidth: '100%',
        height: '5vh',
        top: 0,
        left: 0,
        backgroundColor: '#1a1a1a',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '0 1rem', sm: '0 2rem' },
        zIndex: 1000,
        boxSizing: 'border-box',
      }}
    >
      <HomeIcon sx={{ 
        fontSize: { xs: 24, sm: 32 },
        color: '#ffffff',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          color: '#5a5656',
          transform: 'scale(1.1)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        }
      }} />

      <LogoutIcon sx={{ 
        fontSize: { xs: 24, sm: 32 },
        color: '#ffffff',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          color: '#5a5656',
          transform: 'scale(1.1)',
        },
        '&:active': {
          transform: 'scale(0.95)',
        }
      }} />
    </Box>
  );
};

export default TopBar;