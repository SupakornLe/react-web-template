import React,{Component} from 'react';
import MonthFormNameTh from './MonthFormNameTh';
import MonthFormNameEn from './MonthFormNameEn';
import MonthFormNameShort from './MonthFormNameShort';
export default class MonthDetail extends Component {
  constructor(props) {
    super(props);
    this.state ={
      sid:this.props.sid,
      month_name_th:'',month_name_en:'',month_name_short:''
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({month_name_th:'สิงหาคม',month_name_en:'August',month_name_short:'AUG'});
  }
  setMonthNameTh=(month_name_th)=>this.setState({month_name_th});
  setMonthNameEn=(month_name_en)=>this.setState({month_name_en});
  setMonthNameShort=(month_name_short)=>this.setMonthNameShort({month_name_short});
  render(){
    var {month_name_th,month_name_en,month_name_short}=this.state;
    return(
      <div>
        <MonthFormNameTh value={month_name_th} setMonthNameTh={this.setMonthNameTh} />
        <MonthFormNameEn value={month_name_en} setMonthNameEn={this.setMonthNameEn} />
        <MonthFormNameShort value={month_name_short} setMonthNameShort={this.setMonthNameShort} />
      </div>
    )
  }
}
