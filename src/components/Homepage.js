import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function Homepage() {

  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Box sx={{ bgcolor: '#6B6E70', padding: '10%' }} >
          <h1>Welcome to use the Personal Trainer database!</h1>
          <h3>You can find information about customers and trainings by
            clicking the navigation tabs above.</h3>
        </Box>
      </Container>
    </Fragment>
  )
}

export default Homepage;