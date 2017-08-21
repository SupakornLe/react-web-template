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
    var {employee} = this.props;
    return(
      <div>
        <TextField value={employee} onChange={this.setEmployee} hintText="Employee" floatingLabelText="Employee" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
