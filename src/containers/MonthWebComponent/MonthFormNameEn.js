import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class MonthFormNameEn extends Component {
  constructor(props) {
    super(props);
  }
  setMonthNameEn=(e, value)=>{
    this.props.setMonthNameEn(value);
  }
  render(){
    var {month_name_en} = this.props;
    return(
      <div>
        <TextField value={month_name_en} onChange={this.setMonthNameEn} hintText="Month EN" floatingLabelText="Month EN" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
