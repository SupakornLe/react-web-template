import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import MonthFormNameTh from './MonthFormNameTh';
import MonthFormNameEn from './MonthFormNameEn';
import MonthFormNameShort from './MonthFormNameShort';
export default class MonthCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {month:'',month_name_th:'',month_name_en:'',month_name_short:''}
  }
  submit = () => {
   var {month} = this.state;
   console.log(this.state.month);
  }
  renderButtonSubmit = () => {
   var {month} = this.state;
   if(month.length>4!="" ||1){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Submit" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  setMonthNameTh=(month_name_th)=>this.setState({month_name_th});
  setMonthNameEn=(month_name_en)=>this.setState({month_name_en});
  setMonthNameShort=(month_name_short)=>this.setState({month_name_short});
  render(){
    var {month,month_name_th,month_name_en,month_name_short}=this.state;
    return(
      <div>
        <div><h2>Create Month</h2></div>
        <MonthFormNameTh value={month_name_th} setMonthNameTh={this.setMonthNameTh} />
        <MonthFormNameEn value={month_name_en} setMonthNameEn={this.setMonthNameEn} />
        <MonthFormNameShort value={month_name_short} setMonthNameShort={this.setMonthNameShort} />
        <div>
          {this.renderButtonSubmit()}
        </div>
      </div>
    )
  }
}
