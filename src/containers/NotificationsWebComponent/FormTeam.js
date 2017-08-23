import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class FormTeam extends Component {
  constructor(props) {
    super(props);
  }
  setTeam=(e,value)=>{
    this.props.setTeam(value);
  }
  render(){
    var {team} = this.props;
    return(
      <div>
        <div>
          <TextField value={team} onChange={this.setTeam} hintText="Team"
          floatingLabelText="Team" style={{width:'100%'}} type="text"  />
        </div>
      </div>
    )
  }
}
