import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class UserCreateForm extends Component{
  constructor(props){
    super(props);
    this.state = {user_name:''}
}
submit = () => {
 var {user_name} = this.state;
 console.log(this.state);
}
renderButtonSubmit = () => {
 var {user_name} = this.state;
 console.log(user_name);
 if(user_name.length>1!=""){
   return (<div>
     <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
   </div>);
 }else {
   return <spam />
 }
}
render(){
  var {user_name}=this.state;
return(
  <div>
  <div><h2>Create User</h2></div>
  <div>
      <TextField value={user_name}
        onChange={(e)=>this.setState({user_name:e.target.value})}
        floatingLabelText="User Name" hintText="Name" style={{width:'100%'}} type="text"  />
  </div>
        <div>
          {this.renderButtonSubmit()}
        </div>
  </div>
    )
  }
}
