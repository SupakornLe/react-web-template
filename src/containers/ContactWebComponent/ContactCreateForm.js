import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class ContactCreateForm extends Component {
  constructor(props) {
    super();
    this.state = {contact:''}
  }
  submit = () => {
   var {contact} = this.state;
   console.log(this.state.notifications);
  }
  renderButtonSubmit = () => {
   var {contact} = this.state;
   if(contact.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  render(){
    var {contact}=this.state;
    return(
      <div>
      <div><h2>Create Contact</h2></div>
      <div>
          <TextField value={contact}
            onChange={(e)=>this.setState({contact:e.target.value})}
            floatingLabelText="Contact" hintText="Contact" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
