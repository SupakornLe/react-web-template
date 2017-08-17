import React,{Component} from 'react';

export default class HolidayDetail extends Component {
  constructor(props) {
    super(props);
    this.state =  {data:[
    {sid:1,created_by:'Nut', created_datetime:'2017-07-01 08:00:00'},
    {sid:2,created_by:'Mas', created_datetime:'2017-04-01 15:22:00'},
    {sid:3,created_by:'Nat', created_datetime:'2017-01-01 18:55:00'},
    ]}
  }

  render(){
    var created_by=this.state;
    return(
      <div style={{padding: '20px'}}>
        <em>{this.state.data.created_by}</em><br />
        {console.log(created_by)}
        <em>{this.state.data.created_datetime}</em><br />
      </div>
    )
  }
}
