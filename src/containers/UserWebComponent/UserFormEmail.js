import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

export default class UserFormEmail extends Component{
  constructor(props){
    super(props);
  }
  setEmail = (e, value) => {
    this.props.setEmail(value);
  }
  render(){
    var {email} = this.props;
    return(
      <div>
        <TextField value={email} onChange={this.setEmail} hintText="Email" floatingLabelText="Email" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
