import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormDescriptionEn extends Component{
  constructor(props) {
    super(props);
  }
  setDescriptionEn=(e,value)=>{
    this.props.setDescriptionEn(value);
  }
  render(){
    return(
      <div>
        <TextField value={this.props.value} onChange={this.setDescriptionEn} hintText="Description EN" floatingLabelText="Description EN" />
      </div>
    )
  }
}
