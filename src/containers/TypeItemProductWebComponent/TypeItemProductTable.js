import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {TypeItemProductMainColumns} from './TypeItemProductMainColumns';
import TypeItemProductDetail from './TypeItemProductDetail';


export default class TypeItemProductTable extends Component{
  constructor(props){
    super();
      this.state =  {data:[
      {sid:1,role:'ACE',created_by:'Autsakorn Tanyianniti', created_datetime:'2017-07-01 08:00:00'},
      {sid:2,role:'CCD',created_by:'Autsakorn Tanyianniti', created_datetime:'2017-07-01 08:22:00'},
      {sid:3,role:'GSP',created_by:'Autsakorn Tanyianniti', created_datetime:'2017-07-01 08:55:00'},
      ]}
  }

  render(){
    return(
      <div>
        <div>
          <h2>TypeItemProduct Management</h2>
        </div>
        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={this.state.data}
            columns={TypeItemProductMainColumns}
             showPagination={false}
             SubComponent={(row) => {
               return (
                 <div style={{padding: '20px'}}>
                   <TypeItemProductDetail sid={row.original.sid} />
                 </div>
               )
             }}
          />
      </div>
    </div>
    )
  }
}
