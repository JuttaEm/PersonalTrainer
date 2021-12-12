import React, { useEffect, useState } from 'react';
//import ReactTable from 'react-table';
import 'react-table/react-table.css';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function CustomerList() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, [])

  const fetchCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data.content))
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
      sortable: true, filter: true
    }
  ]

  return (

    <div
      className="ag-theme-material"
      style={{
        height: 600,
        width: '60%',
        margin: 'auto',
        textAlign: 'center'
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

  );
}

export default CustomerList;

// <ReactTable data={customers} columns={columns} />