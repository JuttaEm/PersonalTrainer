import './App.css';
import React, { useState } from 'react';
import Homepage from './components/Homepage';
import CustomerList from './components/CustomerList';
import TrainingList from './components/TrainingList';
//import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
//import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function App() {

  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">

      <Box sx={{ width: '100%', typography: 'body1', borderBottom: 1, borderColor: 'divider', backgroundColor: '#EAEAEA' }}>
        <Tabs value={value} onChange={handleChange} centered >
          <Tab value='one' label='Homepage' />
          <Tab value='two' label='Customers' />
          <Tab value='three' label='Trainings' />
        </Tabs>
      </Box>

      {value === 'one' && <Homepage />}
      {value === 'two' && <CustomerList />}
      {value === 'three' && <TrainingList />}

    </div>


  );
}

export default App;
