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
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setMonthNameEn} hintText="Month EN" floatingLabelText="Month EN" />
      </div>
    )
  }
}
