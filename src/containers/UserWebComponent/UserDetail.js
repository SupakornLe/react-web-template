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
      sid:this.props.sid,
      email:'',password:'',name:'',employee:'',mobile:''
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData = () => {
    console.log('loadData', this.state.sid);
    //Load Data From server
    this.setState({email:'autsakorn.t@firstlogic.co.th',password:'1234',name:'Autsakorn',employee:'FirstLogic',mobile:'084-141-9600'});
  }
  setEmail = (email) => this.setState({email});
  setPassword = (password) => this.setState({password});
  setName = (name) => this.setState({name});
  setEmployee = (employee) => this.setEmployee({employee});
  setMobile = (mobile) => this.setMobile({mobile});
  render(){
    var {sid, email, password, name, employee, mobile} = this.state;
    return(
      <div>
        <UserFormEmail value={email} setEmail={this.setEmail} />
        <UserFormPassword value={password} setPassword={this.setPassword} />
        <UserFormName value={name} setName={this.setName} />
        <UserFormEmployee value={employee} setEmployee={this.setEmployee} />
        <UserFormMobile value={mobile} setMobile={this.setMobile} />
      </div>
    )
  }
}
