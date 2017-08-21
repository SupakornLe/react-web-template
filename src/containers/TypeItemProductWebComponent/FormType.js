import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormType extends Component {
  constructor(props) {
    super(props);
  }
  setType=(e,value)=>{
    this.props.setType(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setType} hintText="Type" floatingLabelText="Type" />
      </div>
    )
  }
}
