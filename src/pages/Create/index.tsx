import React from 'react';
import { Box } from '@mui/material';
import Header from '../../components/header';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import DeleteIcon from '@mui/icons-material/Delete';
import DownloadIcon from '@mui/icons-material/Download';

const Create: React.FC = () => {
  return (
    <Box>
      <Header 
        title="Create Your Project" 
        subtitle="Upload, manage, and download your files" 
      />
      
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: { xs: 4, sm: 6, md: 8 }, // Responsive spacing between icons
          marginBottom: 5,
          marginTop: 3,
        }}
      >
        <UploadFileIcon 
          sx={{
            fontSize: { xs: 40, sm: 48, md: 56 },
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              color: '#646cff',
              transform: 'scale(1.1)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            }
          }}
        />

        <DeleteIcon 
          sx={{
            fontSize: { xs: 40, sm: 48, md: 56 },
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              color: '#ff6464', // Different color for delete
              transform: 'scale(1.1)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            }
          }}
        />

        <DownloadIcon 
          sx={{
            fontSize: { xs: 40, sm: 48, md: 56 },
            color: '#ffffff',
            cursor: 'pointer',
            transition: 'all 0.2s ease-in-out',
            '&:hover': {
              color: '#64ff8a', // Different color for download
              transform: 'scale(1.1)',
            },
            '&:active': {
              transform: 'scale(0.95)',
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default Create;
