import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {TaxiTableColumns} from './TaxiTableColumns';
export default class TaxiTable extends Component {
  constructor(props) {
    super(props);
    this.state =  {data:[
    {sid:1,taxi:'knvdkvnodsknv',created_by:'Nut', created_datetime:'2017-07-01 08:00:00'},
    {sid:2,taxi:'vdsvmdokvnmdsv',created_by:'Mas', created_datetime:'2017-04-01 15:22:00'},
    {sid:3,taxi:'sdvmkdnvldsv',created_by:'Nat', created_datetime:'2017-01-01 18:55:00'},
    ]}
  }
  render(){
    return(
      <div>
        <div>
          <h2>Taxi Management</h2>
        </div>
        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={this.state.data}
            columns={TaxiTableColumns}
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
