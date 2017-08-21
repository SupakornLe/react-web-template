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
    var {month_name_short} = this.props;
    return(
      <div>
        <TextField value={month_name_short} onChange={this.setMonthNameShort} hintText="Name Short" floatingLabelText="Name Short" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
