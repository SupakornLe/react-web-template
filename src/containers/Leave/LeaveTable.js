import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import {leaveColumns} from './LeaveTableColumns';

export default class LeaveTable extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var data = [
      {aaa:'ลาป่วย',bbb:0, ccc:0, ddd:30, eee:0, fff:0, ggg:0, hhh:0},
      {aaa:'ลากิจ',bbb:0, ccc:0, ddd:4, eee:0, fff:0, ggg:0, hhh:0},
      {aaa:'ลาหยุดพักผ่อนประจำปี',bbb:0, ccc:0, ddd:0, eee:0, fff:0, ggg:0, hhh:0},
      {aaa:'ลารับราชการทหาร',bbb:0, ccc:0, ddd:60, eee:0, fff:0, ggg:0, hhh:0},
      {aaa:'ลาอุปสมบท',bbb:0, ccc:0, ddd:0, eee:0, fff:0, ggg:0, hhh:0}
    ]
    return(
      <div>
        <div><h1>Leave Table</h1></div>

        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={data}
            columns={leaveColumns}
             showPagination={false}
          />
        </div>
      </div>
    )
  }
}
