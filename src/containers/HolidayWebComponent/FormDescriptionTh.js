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
    var {description_th} = this.props;
    return(
      <div>
        <TextField value={description_th} onChange={this.setDescriptionTh}
        hintText="Description TH" floatingLabelText="Description TH" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
