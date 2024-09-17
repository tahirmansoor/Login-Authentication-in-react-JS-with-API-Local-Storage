import React from 'react';
import {Container, Typography } from '@mui/material';
import { Grid, Box, Link }from '@mui/material';
import Image1 from './assets/img3.svg';
import './App.css';
import Button from '@mui/material';

const Home = () => {
  return (
    <Container className='Content'>
   <Grid container spacing={2} sx={{
        display: 'flex',
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 2, 
      }}>
 

    <Grid item xs={12} md={7}>
      <Box elevation={3} sx={{ padding: 2 }}>
        <Typography variant="h1" gutterBottom>
        Tahir Mansoor
        </Typography>
        <Typography variant="body1">
          This is some content that goes next to the image. You can add text, lists, or any other type of content here. The layout is responsive, so the columns will stack on smaller screens.
        </Typography>

        <Link className='Btn'>
          Contact Us
        </Link>
      </Box>
    </Grid>

    <Grid item xs={12} md={5}>
      <Box elevation={3}>
        <img
          src={Image1} alt="Placeholder"
          style={{ width: '100%', height: 'auto' }}
        />
      </Box>
    </Grid>
    
  </Grid>
  </Container>

  );
};

export default Home;
