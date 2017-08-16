import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {UserColumns} from './UserColumns';


export default class UserTable extends Component{
  constructor(props){
    super();
      this.state =  {data:[
      {sid:1,user:'Nut',created_by:'Supakorn Lelasornchai', created_datetime:'2017-07-01 08:00:00'},
      {sid:2,user:'Mas',created_by:'Supakorn Lelasornchai', created_datetime:'2017-07-01 08:22:00'},
      {sid:3,user:'Nat',created_by:'Supakorn Lelasornchai', created_datetime:'2017-07-01 08:55:00'},
      ]}
  }

  render(){
    return(
      <div>
        <div>
          <h2>User Management</h2>
        </div>
        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={this.state.data}
            columns={UserColumns}
             showPagination={false}
             SubComponent={(row) => {
               return (
                 <div style={{padding: '20px'}}>
                   <em>{row.row.created_by}</em><br />
                   <em>{row.row.created_datetime}</em><br />
                 </div>
               )
             }}
          />
      </div>
    </div>
    )
  }
  }
