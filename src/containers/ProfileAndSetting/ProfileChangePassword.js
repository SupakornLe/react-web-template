import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ProfileChangePassword extends Component{
  constructor(props){
    super(props);
    this.state = {old_password:'', new_password:''};
  }

  change = () => {
    var {old_password,new_password} = this.state;
    console.log(this.state);
  }

  renderButtonChange = () => {
    var {old_password,new_password} = this.state;
    if(old_password.length>8!="" && new_password.length>8!=""){
      return (<div>
        <RaisedButton label="Change" onClick={()=>this.change()} />
      </div>);
    }else {
      return <spam />
    }
  }

  render(){
    var {old_password,new_password} = this.state;
    return(
      <div>
        <div>
          <TextField hintText="Old Password" floatingLabelText="Old Password" type="password"
            onChange={(e)=>this.setState({old_password:e.target.value})} value={old_password} />
        </div>
        <div>
          <TextField hintText="New Password" floatingLabelText="New Password" type="password"
            onChange={(e)=>this.setState({new_password:e.target.value})} value={new_password} />
        </div>
        <div>
          {this.renderButtonChange()}
        </div>
      </div>
    )
  }
}
