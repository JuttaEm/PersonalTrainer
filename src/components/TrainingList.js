import React, { useEffect, useState } from 'react';
//import ReactTable from 'react-table';
//import 'react-table/react-table.css';
import dayjs from 'dayjs';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function TrainingList() {

  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetchTrainings();
  }, [])

  const fetchTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then(response => response.json())
      .then(data => setTrainings(data.content))
      .catch(err => console.error(err))
  }


  // Columns for the AgGrid
  const columns = [
    { headerName: 'Activity', field: 'activity', sortable: true, filter: true },
    { headerName: 'Date', field: 'date', sortable: true, filter: true, width: 300 },
    { headerName: 'Duration', field: 'duration', sortable: true, filter: true },
    {
      headerName: 'Customer',
      sortable: true, filter: true,
      valueGetter: params => (params.data.customer == null) ? "" : params.data.customer.firstname + "" +
        params.data.customer.lastname
    }
  ]

  return (

    <div
      className="ag-theme-material"
      style={{
        height: 600,
        width: '60%',
        margin: 'auto',
        textAlign: 'center',
        padding: '2%'
      }}
    >

      <AgGridReact
        columnDefs={columns}
        rowData={trainings}
        pagination={true}
        paginationPageSize={10}
      >

      </AgGridReact>



    </div>

  );
}

export default TrainingList;

// <ReactTable data={trainings} columns={columns} />