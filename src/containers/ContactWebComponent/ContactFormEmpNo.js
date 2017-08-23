import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContactFormEmpNo extends Component {
  constructor(props) {
    super(props);
  }
  setEmpNo=(e,value)=>{
    this.props.setEmpNo(value);
  }
  render(){
    var {emp_no} = this.props;
    return(
      <div>
        <TextField value={emp_no} onChange={this.setEmpNo} hintText="Employee Number"
        floatingLabelText="Employee Number" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
