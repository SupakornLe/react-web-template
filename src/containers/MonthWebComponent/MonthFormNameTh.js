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
    var {month_name_th} = this.props;
    return(
      <div>
        <TextField value={month_name_th} onChange={this.setMonthNameTh} hintText="Name TH" floatingLabelText="Name TH" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
