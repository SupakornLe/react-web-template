import React,{Component} from 'react';
import FormContract from './FormContract';
import FormTeam from './FormTeam';
import FormAdm from './FormAdm';
import FormAdmManager from './FormAdmManager';
import FormSupervisor from './FormSupervisor';
import FormOwner from './FormOwner';
import FormOther from './FormOther';
export default class NotificationsDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid:'',contract:'',team:'',adm:'',adm_manager:'',supervisor:'',owner:'',other:'',loaded:false
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({contract:'aaa',team:'bbb',adm:'ccc',adm_manager:'ddd',supervisor:'eee',owner:'fff',other:'ggg',loaded:true});
  }
  setContract=(contract)=>this.setState({contract});
  setTeam=(team)=>this.setState({team});
  setAdm=(adm)=>this.setState({adm});
  setAdmManager=(adm_manager)=>this.setState({adm_manager});
  setSupervisor=(supervisor)=>this.setState({supervisor});
  setOwner=(owner)=>this.setState({owner});
  setOther=(other)=>this.setState({other});
  render(){
    var {contract,team,adm,adm_manager,supervisor,owner,other,loaded} = this.state;
    if(loaded){
    return(
      <div>
        <div>
          <FormContract contract={contract} setContract={this.setContract} />
          <FormTeam team={team} setTeam={this.setTeam} />
          <FormAdm adm={adm} setAdm={this.setAdm} />
          <FormAdmManager adm_manager={adm_manager} setAdmManager={this.setAdmManager} />
          <FormSupervisor supervisor={supervisor} setSupervisor={this.setSupervisor} />
          <FormOwner owner={owner} setOwner={this.setOwner} />
          <FormOther other={other} setOther={this.setOther} />
        </div>
      </div>
    )
  }else{
    return (<div>Loading...</div>)
  }
  }
}
