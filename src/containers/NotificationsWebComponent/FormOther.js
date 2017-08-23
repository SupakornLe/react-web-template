import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormOther extends Component {
  constructor(props) {
    super(props);
  }
  setOther=(e,value)=>{
    this.props.setOther(value);
  }
  render(){
    var {other} = this.props;
    return(
      <div>
        <TextField value={other} onChange={this.setOther} hintText="Other"
        floatingLabelText="Other" style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
