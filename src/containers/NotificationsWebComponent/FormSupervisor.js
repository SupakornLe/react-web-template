import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormSupervisor extends Component {
  constructor(props) {
    super(props);
  }
  setSupervisor=(e,value)=>{
    this.props.setSupervisor(value);
  }
  render(){
    var {supervisor} = this.props;
    return(
      <div>
        <TextField value={supervisor} onChange={this.setSupervisor} hintText="Supervisor"
        floatingLabelText="Supervisor" style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
