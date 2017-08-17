import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class TaxiCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {taxi:''}
  }
  submit = () => {
   var {taxi} = this.state;
   console.log(this.state.taxi);
  }
  renderButtonSubmit = () => {
   var {taxi} = this.state;
   if(taxi.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  render(){
    var {taxi}=this.state;
    return(
      <div>
      <div><h2>Create Month</h2></div>
      <div>
          <TextField value={taxi}
            onChange={(e)=>this.setState({taxi:e.target.value})}
            floatingLabelText="Taxi" hintText="Taxi" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
