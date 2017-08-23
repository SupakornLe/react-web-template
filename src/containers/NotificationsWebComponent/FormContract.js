import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormContract extends Component {
  constructor(props) {
    super(props);
  }
  setContract=(e,value)=>{
    this.props.setContract(value);
  }
  render(){
    var {contract} = this.props;
    return(
      <div>
        <TextField value={contract} onChange={this.setContract}
        hintText="Contract" floatingLabelText="Contract" style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
