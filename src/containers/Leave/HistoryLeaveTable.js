import React, {Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css'
import {historyLeaveColumns} from './HistoryLeaveColumns';

export default class HistoryLeaveTable extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var data = [
      {type:'ลาป่วย',start:'23/08/60', end:'25/08/60', status:'รออนุมัติ'},
      {type:'ลากิจ',start:'09/08/60', end:'10/08/60', status:'รออนุมัติ'},
      {type:'ลาหยุดพักผ่อนประจำปี',start:'20/04/60', end:'30/04/60', status:'อนุมัติ'},
      {type:'ลารับราชการทหาร',start:'01/11/59', end:'01/01/60', status:'อนุมัติ'},
    ]
    return(
      <div>
        <div><h1>History Leave Table</h1></div>

        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={data}
            columns={historyLeaveColumns}
             showPagination={false}
          />
        </div>
      </div>
    )
  }
}
