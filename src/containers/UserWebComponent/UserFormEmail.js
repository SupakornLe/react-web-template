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
    return(
      <div className="" style={{textAlign:''}}>
        <TextField value={this.props.value} onChange={this.setEmail} hintText="Email" floatingLabelText="Email" />
      </div>
    )
  }
}
