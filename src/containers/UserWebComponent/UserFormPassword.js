import React,{Component} from 'react';
import TextField from 'material-ui/TextField';

export default class UserFormPassword extends Component{
  constructor(props){
    super(props);
  }
  setPassword = (e, value) => {
    this.props.setPassword(value);
  }
  render(){
    return(
      <div>
        <TextField type="password" value={this.props.value} onChange={this.setPassword} hintText={"Password"} floatingLabelText="Password" />
      </div>
    )
  }
}
