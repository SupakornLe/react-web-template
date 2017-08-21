import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AssetFormType from './AssetFormType';
import AssetFormItem from './AssetFormItem';
import AssetFormProduct from './AssetFormProduct';
export default class AssetCreateForm extends Component{
  constructor(props) {
    super(props);
    this.state = {type:'', item:'', product:''}
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
  setItem = (item) => this.setState({item})
  setProduct = (product) => this.setState({product})
  render(){
    var {type, item, product} = this.state;
    return(
      <div>
        <div><h2>Create Asset</h2></div>
          <AssetFormType type={type} setType={this.setType} />
          <AssetFormItem item={item} setItem={this.setItem} />
          <AssetFormProduct product={product} setProduct={this.setProduct} />
          <div>
              {this.renderButtonSubmit()}
          </div>
      </div>
    )
  }
}
