import React,{Component} from 'react';
import MonthFormNameTh from './MonthFormNameTh';
import MonthFormNameEn from './MonthFormNameEn';
import MonthFormNameShort from './MonthFormNameShort';
export default class MonthDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      sid:'',month_name_th:'',month_name_en:'',month_name_short:'',loaded:false
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({month_name_th:'สิงหาคม',month_name_en:'August',month_name_short:'AUG',loaded:true});
  }
  setMonthNameTh=(month_name_th)=>this.setState({month_name_th})
  setMonthNameEn=(month_name_en)=>this.setState({month_name_en})
  setMonthNameShort=(month_name_short)=>this.setMonthNameShort({month_name_short})
  render(){
    var {month_name_th,month_name_en,month_name_short,loaded}=this.state;
    if(loaded){
    return(
      <div>
        <div>
          <MonthFormNameTh month_name_th={month_name_th} setMonthNameTh={this.setMonthNameTh} />
          <MonthFormNameEn month_name_en={month_name_en} setMonthNameEn={this.setMonthNameEn} />
          <MonthFormNameShort month_name_short={month_name_short} setMonthNameShort={this.setMonthNameShort} />
        </div>
      </div>
      );
    }else{
      return (<div>Loading...</div>)
    }
  }
}
