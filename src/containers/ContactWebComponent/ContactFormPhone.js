import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContactFormPhone extends Component {
  constructor(props) {
    super(props);
  }
  setPhone=(e,value)=>{
    this.props.setPhone(value);
  }
  render(){
    var {phone} = this.props;
    return(
      <div>
        <TextField value={phone} onChange={this.setPhone} hintText="Phone"
        floatingLabelText="Phone" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
