import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContactFormName extends Component {
  constructor(props) {
    super(props);
  }
  setName=(e,value)=>{
    this.props.setName(value);
  }
  render(){
    var {name} = this.props;
    return(
      <div>
        <TextField value={name} onChange={this.setName} hintText="Name"
        floatingLabelText="Name" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
