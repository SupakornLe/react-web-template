import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ProfileSetPasswordRemedy extends Component{
  constructor(props){
    super(props);
    this.state = {user_remedy:'', password_remedy:''};
  }

  submit = () => {
    var {user_remedy,password_remedy} = this.state;
    console.log(this.state);
  }

  renderButtonSubmit = () => {
    var {user_remedy,password_remedy} = this.state;
    if(user_remedy.length>8!="" && password_remedy.length>8!=""){
      return (<div>
        <RaisedButton label="Submit" onClick={()=>this.submit()} />
      </div>);
    }else {
      return <spam />
    }
  }

  render(){
    var {user_remedy,password_remedy} = this.state;
    return(
      <div>
        <div>
          <TextField hintText="User Remedy" floatingLabelText="User"
            onChange={(e)=>this.setState({user_remedy:e.target.value})} value={user_remedy} />
        </div>
        <div>
          <TextField hintText="Password Remedy" floatingLabelText="Password" type="password"
            onChange={(e)=>this.setState({password_remedy:e.target.value})} value={password_remedy} />
        </div>
        <div>
          {this.renderButtonSubmit()}
        </div>
      </div>
    )
  }
}
