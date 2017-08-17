import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class MonthCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {month:''}
  }
  submit = () => {
   var {month} = this.state;
   console.log(this.state.month);
  }
  renderButtonSubmit = () => {
   var {month} = this.state;
   if(month.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  render(){
    var {month}=this.state;
    return(
      <div>
      <div><h2>Create Month</h2></div>
      <div>
          <TextField value={month}
            onChange={(e)=>this.setState({month:e.target.value})}
            floatingLabelText="Month" hintText="Month" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
