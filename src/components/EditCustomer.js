import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



function EditCustomer(props) {

  //State for the dialog-component
  const [open, setOpen] = useState(false);

  const [customer, setCustomer] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    streetaddress: '',
    postcode: '',
    city: ''
  });

  // Open the dialog-box and set states for the customer object on the edit form
  const handleClickOpen = () => {
    setCustomer({
      firstname: props.params.data.firstname,
      lastname: props.params.data.lastname,
      email: props.params.data.email,
      phone: props.params.data.phone,
      streetaddress: props.params.data.streetaddress,
      postcode: props.params.data.postcode,
      city: props.params.data.city
    });
    setOpen(true);
  };

  // Close the dialog-box
  const handleClose = () => {
    setOpen(false);
  };

  // Save the data to the states of the customer object when user gives an input
  const inputChanged = (event) => {
    setCustomer({ ...customer, [event.target.name]: event.target.value })
  }

  // Save changes to the edited customer
  const handleSave = () => {
    props.editCustomer(props.params.value, customer);
    handleClose();
  }

  return (
    <div>
      <Button size="small" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit the selected customer</DialogTitle>
        <DialogContent>
          <TextField
            name="firstname"
            value={customer.firstname}
            onChange={inputChanged}
            margin="dense"
            label="Firstname"
            fullWidth
            variant="standard"
          />
          <TextField
            name="lastname"
            value={customer.lastname}
            onChange={inputChanged}
            margin="dense"
            label="Lastname"
            fullWidth
            variant="standard"
          />
          <TextField
            name="email"
            value={customer.email}
            onChange={inputChanged}
            margin="dense"
            label="Email"
            fullWidth
            variant="standard"
          />
          <TextField
            name="phone"
            value={customer.phone}
            onChange={inputChanged}
            margin="dense"
            label="Phone"
            fullWidth
            variant="standard"
          />
          <TextField
            name="streetaddress"
            value={customer.streetaddress}
            onChange={inputChanged}
            margin="dense"
            label="Street address"
            fullWidth
            variant="standard"
          />
          <TextField
            name="postcode"
            value={customer.postcode}
            onChange={inputChanged}
            margin="dense"
            label="Postcode"
            fullWidth
            variant="standard"
          />
          <TextField
            name="city"
            value={customer.city}
            onChange={inputChanged}
            margin="dense"
            label="City"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default EditCustomer;