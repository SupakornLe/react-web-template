import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormAdm extends Component {
  constructor(props) {
    super(props);
  }
  setAdm=(e,value)=>{
    this.props.setAdm(value);
  }
  render(){
    var {adm} = this.props;
    return(
      <div>
        <TextField value={adm} onChange={this.setAdm} hintText="Adm"
        floatingLabelText="Adm" style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
