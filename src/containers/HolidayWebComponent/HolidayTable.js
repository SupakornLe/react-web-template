import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import {HolidayTableColumns} from './HolidayTableColumns';
import HolidayDetail from './HolidayDetail';
export default class HolidayTable extends Component {
  constructor(props) {
    super(props);
    this.state =  {data:[
    {sid:1,holiday:'knvdkvnodsknv',created_by:'Nut', created_datetime:'2017-07-01 08:00:00'},
    {sid:2,holiday:'vdsvmdokvnmdsv',created_by:'Mas', created_datetime:'2017-04-01 15:22:00'},
    {sid:3,holiday:'sdvmkdnvldsv',created_by:'Nat', created_datetime:'2017-01-01 18:55:00'},
    ],
    loaded:false
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData = () => {
    //LOAD DATA FROM SERVER
    this.setState({ loaded:true});
  }
  render(){
    if(this.state.loaded){
    return(
      <div>
        <div>
          <h2>Holiday Management</h2>
        </div>
        <div className="table-wrap">
          <ReactTable
            className="-striped -highlight"
            data={this.state.data}
            columns={HolidayTableColumns}
             showPagination={false}
             SubComponent={(row) => {
               return (
                 <div style={{padding: '20px'}}>
                   <HolidayDetail sid={row.original.sid} />
                 </div>
               )
             }}
          />
      </div>
    </div>
    )
    }else{
      return (<div>Loading...</div>);
    }
  }
}
