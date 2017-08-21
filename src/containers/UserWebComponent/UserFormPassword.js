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
    var {password} = this.props;
    return(
      <div>
        <TextField type="password" value={password} onChange={this.setPassword} hintText={"Password"} floatingLabelText="Password" style={{width:'100%'}} />
      </div>
    )
  }
}
