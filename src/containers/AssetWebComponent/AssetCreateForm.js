import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
export default class AssetCreateForm extends Component{
  constructor(props) {
    super(props);
    this.state = {asset:''}
  }
  submit = () => {
   var {asset} = this.state;
   console.log(this.state.notifications);
  }
  renderButtonSubmit = () => {
   var {asset} = this.state;
   if(asset.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  render(){
    var {asset} = this.state;
    return(
      <div>
      <div><h2>Create Asset</h2></div>
      <div>
          <TextField value={asset}
            onChange={(e)=>this.setState({asset:e.target.value})}
            floatingLabelText="Notifications" hintText="Notifications" style={{width:'100%'}} type="text"  />
      </div>
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
