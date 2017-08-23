import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class ContactFormCompany extends Component {
  constructor(props) {
    super(props);
  }
  setCompany=(e,value)=>{
    this.props.setCompany(value);
  }
  render(){
    var {company} = this.props;
    return(
      <div>
        <TextField value={company} onChange={this.setCompany} hintText="Company"
        floatingLabelText="Company" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
