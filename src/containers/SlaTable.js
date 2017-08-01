import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import {columns} from './SlaTableColumns';

export default class SlaTable extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var data = [
      {firstName:'Mas',lastName:'Mas lastName', age:18},
      {firstName:'Nut',lastName:'Nut lastName', age:19},
      {firstName:'Kaew',lastName:'Kaew lastName', age:20}
    ]
    return(
      <div>
        <div>React Table</div>

        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={data}
            columns={columns}
            defaultPageSize={5}
            SubComponent={(row) => {
              console.log(row);
              return (
                <div style={{padding: '20px'}}>
                  <em>{row.row.firstName}</em><br />
                  <em>{row.row.lastName}</em><br />
                  <em>{row.row.age}</em>
                </div>
              )
            }}
          />
        </div>
      </div>
    )
  }
}
