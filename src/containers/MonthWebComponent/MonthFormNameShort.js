import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class MonthFormNameShort extends Component {
  constructor(props) {
    super(props);
  }
  setMonthNameShort=(e, value)=>{
    this.props.setMonthNameShort(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setMonthNameShort} hintText="Name Short" floatingLabelText="Name Short" />
      </div>
    )
  }
}
