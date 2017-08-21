import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import UserFormEmail from './UserFormEmail';
import UserFormPassword from './UserFormPassword';
import UserFormName from './UserFormName';
import UserFormEmployee from './UserFormEmployee';
import UserFormMobile from './UserFormMobile';
export default class UserCreateForm extends Component{
  constructor(props){
    super(props);
    this.state = {email:'',password:'',name:'',employee:'',mobile:''}
}
submit = () => {
 var {user_name} = this.state;
 console.log(this.state);
}
renderButtonSubmit = () => {
    var {email} = this.state;
    console.log(email);
   if(email.length>1!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
}
setEmail = (email) => this.setState({email})
setPassword = (password) => this.setState({password});
setName = (name) => this.setState({name});
setEmployee = (employee) => this.setEmployee({employee});
setMobile = (mobile) => this.setMobile({mobile});
render(){
  var {email, password, name, employee, mobile}=this.state;
  return(
      <div>
          <div><h2>Create User</h2></div>
          <UserFormEmail email={email} setEmail={this.setEmail} />
          <UserFormPassword password={password} setPassword={this.setPassword} />
          <UserFormName name={name} setName={this.setName} />
          <UserFormEmployee employee={employee} setEmployee={this.setEmployee} />
          <UserFormMobile mobile={mobile} setMobile={this.setMobile} />
          <div>
              {this.renderButtonSubmit()}
          </div>
      </div>
    )
  }
}
