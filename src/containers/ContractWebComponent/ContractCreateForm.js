import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class ContractCreateForm extends Component {
  constructor(props) {
    super();
    this.state = {contract:''}
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
  render(){
    var {contract}=this.state;
    return(
      <div>
      <div><h2>Create Contract</h2></div>
      <div>
          <TextField value={contract}
            onChange={(e)=>this.setState({contract:e.target.value})}
            floatingLabelText="Contract" hintText="Contract" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
