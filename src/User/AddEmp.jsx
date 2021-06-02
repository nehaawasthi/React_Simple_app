import {React,useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { InputLabel, DialogTitle, Select, MenuItem, Typography, FormLabel, FormControl } from '@material-ui/core';


export default function AddEmp() {

  const [open, setOpen] = useState(false);
  const [emp, setEmp] = useState({});
  const [project, setProject] =useState('');
//   const [userCategory, setUserCategory] = useState([]);
//   const [errorText,setErrorText] = useState(false);
//   const [errorTextName,setErrorTextName] = useState(false);
//   const [errorTextAbb,setErrorTextAbb] = useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange =(event)=>{
    const { name, value } = event.target;
    var projectValue;
    if(name==='project'){
        projectValue= setProject({[name]: value});
        setEmp({...emp,projectValue});
    }
    setEmp({ ...emp, [name]: value });
  }


const handleSubmit =()=>{
    localStorage.setItem('data',JSON.stringify(emp));
    setOpen(false);
}

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add New Employee
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style ={{textAlign: 'center'}}>Add Employee</DialogTitle>
        <DialogContent>
         
          <TextField
            type = 'email'
            required
            id="standard-required"
            margin="dense"
            label="Email"
            name="email"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            required
            id="standard-required"
            margin="dense"
            label="Name"
            name="name"
            fullWidth
            onChange={handleInputChange}
          />
          <TextField
            required
            id="standard-required"
            margin="dense"
            label="Mobile number"
            name="mobile_number"
            fullWidth
            onChange={handleInputChange}
          />
        <InputLabel id="demo-simple-select-label">Project</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          fullWidth
          name='project'
        value={project.project}
          onChange={handleInputChange}
        >
          <MenuItem value={'project1'}>Project 1</MenuItem>
          <MenuItem value={'project2'}>Project 2</MenuItem>
          <MenuItem value={'project3'}>Project 3</MenuItem>
        </Select>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Add Service
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
