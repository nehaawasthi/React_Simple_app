
import './emp.css';
import React from 'react';
import AddEmp from './AddEmp'
import ListAllEmp from './ListAllEmp';




export default class Emp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }


 
render(){
    return (
        <div className='page'>
            <div>
                 <AddEmp /> 
                 <ListAllEmp />
            </div>
         
        </div>
      );
}
  
}