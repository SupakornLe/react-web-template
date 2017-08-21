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
    var {type} = this.props;
    return(
      <div>
        <TextField value={type} onChange={this.setType} hintText="Type"
        floatingLabelText="Type"  style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
