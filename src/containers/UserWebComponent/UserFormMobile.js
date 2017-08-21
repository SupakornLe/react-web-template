import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class UserFormEmployee extends Component {
  constructor(props) {
    super(props);
  }
  setMobile=(e, value)=>{
    this.props.setMobile(value);
  }
  render(){
    var {mobile} = this.props;
    return(
      <div>
        <TextField value={mobile} onChange={this.setMobile} hintText="Mobile" floatingLabelText="Mobile" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
