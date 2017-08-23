import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import ContactFormName from './ContactFormName';
import ContactFormEmail from './ContactFormEmail';
import ContactFormMobile from './ContactFormMobile';
import ContactFormPhone from './ContactFormPhone';
import ContactFormCompany from './ContactFormCompany';
import ContactFormEmpNo from './ContactFormEmpNo';
export default class ContactCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {name:'',email:'',mobile:'',phone:'',Company:'',emp_no:''}
  }
  submit = () => {
   var {name} = this.state;
   console.log(this.state.notifications);
  }
  renderButtonSubmit = () => {
   var {name} = this.state;
   if(name.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  setName=(name)=>this.setState({name});
  setEmail=(email)=>this.setState({email});
  setMobile=(mobile)=>this.setState({mobile});
  setPhone=(phone)=>this.setState({phone});
  setCompany=(company)=>this.setState({company});
  setEmpNo=(emp_no)=>this.setState({emp_no});
  render(){
    var {name,email,mobile,phone,company,emp_no}=this.state;
    return(
      <div>
      <div><h2>Create Contact</h2></div>
      <ContactFormName name={name} setName={this.setName} />
      <ContactFormEmail email={email} setEmail={this.setEmail} />
      <ContactFormMobile mobile={mobile} setMobile={this.setMobile} />
      <ContactFormPhone phone={phone} setPhone={this.setPhone} />
      <ContactFormCompany company={company} setCompany={this.setCompany} />
      <ContactFormEmpNo emp_no={emp_no} setEmpNo={this.setEmpNo} />
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
