import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class HolidayCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {holiday:''}
  }
  submit=()=>{
    var {holiday} = this.state;
    console.log(this.state.holiday);
  }
  renderButtonSubmit=()=>{
    var {holiday} = this.state;
    if(holiday.length>4!=""){
      return (<div>
        <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
      </div>);
    }else {
      return <spam />
    }
  }
  render(){
    var {holiday}=this.state;
    return(
      <div>
      <div><h2>Create Holiday</h2></div>
      <div>
          <TextField value={holiday}
            onChange={(e)=>this.setState({holiday:e.target.value})}
            floatingLabelText="Holiday" hintText="Date" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
