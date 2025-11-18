import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './customToolbarCalendar.css';

function CustomToolbar({ label, onNavigate }) {
  return (
    <div className="rbc-toolbar customToolbar">
      <IconButton onClick={() => onNavigate('PREV')} >
        <ArrowBackIcon className='buttonToolbar'/>
      </IconButton>
      
      <span className="rbc-toolbar-label customToolbarLabel" >{label}</span>
      
      <IconButton onClick={() => onNavigate('NEXT')}>
        <ArrowForwardIcon className='buttonToolbar'/>
      </IconButton>
    </div>
  );
}

export default CustomToolbar;