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
    this.state = {user_name:'',email:'',password:'',name:'',employee:'',mobile:''}
}
submit = () => {
 var {user_name} = this.state;
 console.log(this.state);
}
renderButtonSubmit = () => {
    var {user_name} = this.state;
    console.log(user_name);
   if(user_name.length>1!="" || 1){
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
  var {user_name, email, password, name, employee, mobile}=this.state;
  return(
      <div>
          <div><h2>Create User</h2></div>
          <UserFormEmail value={email} setEmail={this.setEmail} />
          <UserFormPassword value={password} setPassword={this.setPassword} />
          <UserFormName value={name} setName={this.setName} />
          <UserFormEmployee value={employee} setEmployee={this.setEmployee} />
          <UserFormMobile value={mobile} setMobile={this.setMobile} />
          <div>
              {this.renderButtonSubmit()}
          </div>
      </div>
    )
  }
}
