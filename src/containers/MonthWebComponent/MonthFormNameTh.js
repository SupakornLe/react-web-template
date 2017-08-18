import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class MonthFormNameTh extends Component {
  constructor(props) {
    super(props);
  }
  setMonthNameTh=(e, value)=> {
    this.props.setMonthNameTh(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setMonthNameTh} hintText="Name TH" floatingLabelText="Name TH" />
      </div>
    )
  }
}
