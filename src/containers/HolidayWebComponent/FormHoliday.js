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
    var {holiday} = this.props;
    return(
      <div>
        <TextField value={holiday} onChange={this.setHoliday} hintText="Holiday"
        floatingLabelText="Holiday"  style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
