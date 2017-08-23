import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContactFormEmail extends Component {
  constructor(props) {
    super(props);
  }
  setEmail=(e,value)=>{
    this.props.setEmail(value);
  }
  render(){
    var {email} = this.props;
    return(
      <div>
        <TextField value={email} onChange={this.setEmail} hintText="E-Mail"
        floatingLabelText="E-Mail" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
