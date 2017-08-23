import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormOwner extends Component {
  constructor(props) {
    super(props);
  }
  setOwner=(e,value)=>{
    this.props.setOwner(value);
  }
  render(){
    var {owner} = this.props;
    return(
      <div>
        <TextField value={owner} onChange={this.setOwner} hintText="Owner"
        floatingLabelText="Owner" style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
