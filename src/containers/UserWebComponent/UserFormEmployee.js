import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class UserFormEmployee extends Component {
  constructor(props) {
    super(props);
  }
  setEmployee=(e, value)=>{
    this.props.setEmployee(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setEmployee} hintText="Employee" floatingLabelText="Employee" />
      </div>
    )
  }
}
