import React, { useEffect, useState } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

//import { AgGridReact } from 'ag-grid-react';

//import 'ag-grid-community/dist/styles/ag-grid.css';
//import 'ag-grid-community/dist/styles/ag-theme-material.css';

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
    { Header: 'Firstname', accessor: 'firstname' },
    { Header: 'Lastname', accessor: 'lastname' },
    { Header: 'Email', accessor: 'email' }
  ]

  return (

    <div>

      <ReactTable data={customers} columns={columns} />

    </div>

  );
}

export default CustomerList;