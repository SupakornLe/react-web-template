import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class NotificationsCreateForm extends Component {
  constructor(props) {
    super();
    this.state = {notifications:''}
  }
  submit = () => {
   var {notifications} = this.state;
   console.log(this.state.notifications);
  }
  renderButtonSubmit = () => {
   var {notifications} = this.state;
   if(notifications.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  render(){
    var {notifications}=this.state;
    return(
      <div>
      <div><h2>Create Notifications</h2></div>
      <div>
          <TextField value={notifications}
            onChange={(e)=>this.setState({notifications:e.target.value})}
            floatingLabelText="Notifications" hintText="Notifications" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
