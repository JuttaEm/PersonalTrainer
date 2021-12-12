import React, { Fragment, useEffect, useState } from 'react';
//import ReactTable from 'react-table';
//import 'react-table/react-table.css';
//import Button from '@mui/material/Button';
import AddCustomer from './AddCustomer';
import Snackbar from '@mui/material/Snackbar';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';


function CustomerList() {

  const [customers, setCustomers] = useState([]);

  // States for the Snackbar-component
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, [])

  const fetchCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data.content))
      .catch(err => console.error(err))
  }

  const addCustomer = (customer) => {
    fetch('https://customerrest.herokuapp.com/api/customers', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(customer)
    })
      .then(response => {
        if (response.ok) {
          fetchCustomers();
        } else {
          alert('Something went wrong :( ');
        }
      })
      .catch(err => console.error(err))
  }

  // Columns for the AgGrid
  const columns = [
    {
      headerName: 'Firstname',
      valueGetter: params => (params.data.firstname == null) ? "" : params.data.firstname,
      sortable: true, filter: true
    },
    {
      headerName: 'Lastname',
      valueGetter: params => (params.data.lastname == null) ? "" : params.data.lastname,
      sortable: true, filter: true
    },
    {
      headerName: 'Email',
      valueGetter: params => (params.data.email == null) ? "" : params.data.email,
      sortable: true, filter: true,
      width: '250'
    },
    {
      headerName: 'Phone',
      valueGetter: params => (params.data.phone == null) ? "" : params.data.phone,
      sortable: true, filter: true
    },
    {
      headerName: 'Street address',
      valueGetter: params => (params.data.streetaddress == null) ? "" : params.data.streetaddress,
      sortable: true, filter: true
    },
    {
      headerName: 'Postcode',
      valueGetter: params => (params.data.postcode == null) ? "" : params.data.postcode,
      sortable: true, filter: true
    },
    {
      headerName: 'City',
      valueGetter: params => (params.data.city == null) ? "" : params.data.city,
      sortable: true, filter: true
    }
  ]

  return (

    <Fragment>

      <div style={{ padding: '1%' }}>
        <AddCustomer addCustomer={addCustomer} />
      </div>

      <div
        className="ag-theme-material"
        style={{
          height: 600,
          width: '80%',
          margin: 'auto',
          textAlign: 'center',
          padding: '2%'
        }}
      >

        <AgGridReact
          columnDefs={columns}
          rowData={customers}
          pagination={true}
          paginationPageSize={10}
        >
        </AgGridReact>

      </div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={msg}
      />

    </Fragment>

  );
}

export default CustomerList;

// <ReactTable data={customers} columns={columns} />