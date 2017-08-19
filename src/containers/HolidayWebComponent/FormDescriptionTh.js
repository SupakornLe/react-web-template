import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormDescriptionTh extends Component {
  constructor(props) {
    super(props);
  }
  setDescriptionTh=(e,value)=>{
    this.props.setDescriptionTh(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setDescriptionTh} hintText="Description TH" floatingLabelText="Description TH" />
      </div>
    )
  }
}
