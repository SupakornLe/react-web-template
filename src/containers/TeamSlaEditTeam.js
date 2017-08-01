import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class TeamSlaEditTeam extends Component{
  constructor(props){
    super(props);
    this.state = {team_level_1:'', team_level_2:''};
  }

  submit = () => {
    var {team_level_1,team_level_2} = this.state;
    return this.setState({result:team_level_1 + team_level_2});
    console.log(this.state);
  }

  render(){
    var {team_level_1,team_level_2,result} = this.state;
    return(
      <div>
        <div>
          <TextField hintText="Name Level 1" onChange={(e)=>this.setState({team_level_1:e.target.value})} value={team_level_1} />
        </div>
        <div>
          <TextField hintText="Name Level 2" onChange={(e)=>this.setState({team_level_2:e.target.value})} value={team_level_2} />
        </div>
        <div>
          <RaisedButton label="Sumit" onClick={()=>this.submit()} />
        </div>
        <div>
          {result}
        </div>
      </div>
    )
  }
}
