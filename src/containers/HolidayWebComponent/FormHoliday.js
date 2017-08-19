import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormHoliday extends Component {
  constructor(props) {
    super(props);
  }
  setHoliday=(e,value)=>{
    this.props.setHoliday(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setHoliday} hintText="Holiday" floatingLabelText="Holiday" />
      </div>
    )
  }
}
