import {React, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper,Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, 
  Fab} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';


const columns = [
  { id: 'email', label: 'German name'},
  { id: 'name', label: 'English name'},
  { id: 'mobile_number', label: 'Mobile Number'},
  { id:'project', label :'Project'},
  { id:'action', label :'Action'}
];

function createData(email, name, mobile, project) {
    
    return { email, name, mobile,project };
  }
  
  const rows = [
    createData('a@gmail.com', 'Test1', 1324171354, 'project1'),
    createData('b@gmail.com', 'Test2', 1324171354, 'project2'),
    createData('c@gmail.com', 'Test3', 1324171354, 'project3'),
    createData('United States', 'US', 327167434, 9833520),
   
  ];
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 440,
    },
  });

export default function ListAllEmp() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [item,setItem]=useState([]) 


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(()=>{

    const data = localStorage.getItem('data')
    let strorageData =item;
    if(data){  
        strorageData.push(JSON.parse(data));
        setItem(strorageData)
     }
    
    },[]);
    
    console.log(',rowsrow>>>>>>>>',rows)
    console.log('item>>>>>.',item)

return (
    <div>
    <Paper className={classes.root} style ={{width: '98%', height: '400px',marginTop: '12px'}}>
      <TableContainer className={classes.container} style ={{maxHeight: '350px'}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {item.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  
                  {columns.map((column) => {
                    const value = row[column.id];                  
                    return ( 
                      column && column.id ==='action' ? <Fab color="primary" style ={{width: '35px',marginTop: '50px',height: '35px'}}aria-label="edit">
                      <EditIcon/>
                      </Fab> :
                      <TableCell key={column.id} align={column.align}>
                          {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
     
    </div>
  );
}
