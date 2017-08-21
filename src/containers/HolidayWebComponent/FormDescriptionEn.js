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
    var {description_en} = this.props;
    return(
      <div>
        <TextField value={description_en} onChange={this.setDescriptionEn} hintText="Description EN" floatingLabelText="Description EN" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
