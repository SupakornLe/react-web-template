import React,{Component} from 'react'
import TextField from 'material-ui/TextField'
export default class UserFormName extends Component {
  constructor(props) {
    super(props);
  }
  setName=(e, value)=>{
    this.props.setName(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setName} hintText="Name" floatingLabelText="Name" />
      </div>
    )
  }
}
