import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AssetFormType from './AssetFormType';
import AssetFormItem from './AssetFormItem';
export default class AssetCreateForm extends Component{
  constructor(props) {
    super(props);
    this.state = {type:'', item:''}
  }
  submit = () => {
   var {type} = this.state;
   console.log(this.state.notifications);
  }
  renderButtonSubmit = () => {
   var {type} = this.state;
   if(type.length>4!=""){
     return (<div>
       <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
     </div>);
   }else {
     return <spam />
   }
  }
  setType = (type) => this.setState({type})
  setItem = (e, item) => this.setState({item})
  render(){
    var {type, item} = this.state;
    return(
      <div>
        <div><h2>Create Asset</h2></div>
          <AssetFormType type={type} setType={this.setType} />
          <AssetFormItem type={item} setItem={this.setItem} />
          <div>
              {this.renderButtonSubmit()}
          </div>
      </div>
    )
  }
}
