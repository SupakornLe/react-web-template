import React,{Component} from 'react';
import ContactFormName from './ContactFormName';
import ContactFormEmail from './ContactFormEmail';
import ContactFormMobile from './ContactFormMobile';
import ContactFormPhone from './ContactFormPhone';
import ContactFormCompany from './ContactFormCompany';
import ContactFormEmpNo from './ContactFormEmpNo';
export default class ContactDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid:'',name:'',email:'',mobile:'',phone:'',company:'',emp_no:''
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({name:'Autsakorn',email:'autsakorn.t@firstlogic.co.th',mobile:'084-141-9600',phone:'02-887-7877',company:'firstlogic',emp_no:'006281',loaded:true});
  }
  setName=(name)=>this.setState({name});
  setEmail=(email)=>this.setState({email});
  setMobile=(mobile)=>this.setState({mobile});
  setPhone=(phone)=>this.setState({phone});
  setCompany=(company)=>this.setState({company});
  setEmpNo=(emp_no)=>this.setState({emp_no});
  render(){
    var {name,email,mobile,phone,company,emp_no,loaded} = this.state;
    if(loaded){
    return(
      <div>
        <div>
          <ContactFormName name={name} setName={this.setName} />
          <ContactFormEmail email={email} setEmail={this.setEmail} />
          <ContactFormMobile mobile={mobile} setMobile={this.setMobile} />
          <ContactFormPhone phone={phone} setPhone={this.setPhone} />
          <ContactFormCompany company={company} setCompany={this.setCompany} />
          <ContactFormEmpNo emp_no={emp_no} setEmpNo={this.setEmpNo} />
        </div>
      </div>
    )
    }else{
      return (<div>Loading...</div>)
    }
  }
}
