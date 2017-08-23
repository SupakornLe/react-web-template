import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormAdmManager extends Component {
  constructor(props) {
    super(props);
  }
  setAdmManager=(e,value)=>{
    this.props.setAdmManager(value);
  }
  render(){
    var {adm_manager} = this.props;
    return(
      <div>
        <TextField value={adm_manager} onChange={this.setAdmManager} hintText="Adm Manager"
        floatingLabelText="Adm Manager" style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
