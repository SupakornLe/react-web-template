import React, {Component} from 'react';
import UserFormEmail from './UserFormEmail';
import UserFormPassword from './UserFormPassword';
import UserFormName from './UserFormName';
import UserFormEmployee from './UserFormEmployee';
import UserFormMobile from './UserFormMobile';
export default class UserDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      sid:'',email:'',password:'',name:'',employee:'',mobile:'', loaded:false
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData = () => {
    console.log('loadData', this.state.sid);
    //Load Data From server
    this.setState({email:'autsakorn.t@firstlogic.co.th',password:'1234',name:'Autsakorn',employee:'FirstLogic',mobile:'084-141-9600', loaded:true});
  }
  setEmail = (email) => this.setState({email})
  setPassword = (password) => this.setState({password})
  setName = (name) => this.setState({name});
  setEmployee = (employee) => this.setEmployee({employee})
  setMobile = (mobile) => this.setMobile({mobile})
  render(){
    var {email, password, name, employee, mobile, loaded} = this.state;
    if(loaded){
    return(
        <div>
          <div>
            <UserFormEmail email={email} setEmail={this.setEmail} />
            <UserFormPassword password={password} setPassword={this.setPassword} />
            <UserFormName name={name} setName={this.setName} />
            <UserFormEmployee employee={employee} setEmployee={this.setEmployee} />
            <UserFormMobile mobile={mobile} setMobile={this.setMobile} />
          </div>
        </div>
      );
    }else{
      return (<div>Loading...</div>)
    }
  }
}
