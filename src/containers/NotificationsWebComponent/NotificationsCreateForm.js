import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormContract from './FormContract';
import FormTeam from './FormTeam';
import FormAdm from './FormAdm';
import FormAdmManager from './FormAdmManager';
import FormSupervisor from './FormSupervisor';
import FormOwner from './FormOwner';
import FormOther from './FormOther';
export default class NotificationsCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {contract:'',team:'',adm:'',adm_manager:'',supervisor:'',owner:'',other:''}
  }
  submit = () => {
   var {contract} = this.state;
   console.log(this.state.notifications);
  }
  renderButtonSubmit = () => {
   var {contract} = this.state;
   if(contract.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  setContract=(contract)=>this.setState({contract});
  setTeam=(team)=>this.setState({team});
  setAdm=(adm)=>this.setState({adm});
  setAdmManager=(adm_manager)=>this.setState({adm_manager});
  setSupervisor=(supervisor)=>this.setState({supervisor});
  setOwner=(owner)=>this.setState({owner});
  setOther=(other)=>this.setState({other});
  render(){
    var {contract,team,adm,adm_manager,supervisor,owner,other}=this.state;
    return(
      <div>
      <div><h2>Create Notifications</h2></div>
      <FormContract contract={contract} setContract={this.setContract} />
      <FormTeam team={team} setTeam={this.setTeam} />
      <FormAdm adm={adm} setAdm={this.setAdm} />
      <FormAdmManager adm_manager={adm_manager} setAdmManager={this.setAdmManager} />
      <FormSupervisor supervisor={supervisor} setSupervisor={this.setSupervisor} />
      <FormOwner owner={owner} setOwner={this.setOwner} />
      <FormOther other={other} setOther={this.setOther} />
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
