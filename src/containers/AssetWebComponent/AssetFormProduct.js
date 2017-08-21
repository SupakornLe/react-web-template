import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class AssetFormProduct extends Component {
  constructor(props) {
    super(props);
  }
  setProduct=(e,value)=>{
    this.props.setProduct(value);
  }
  render(){
    var {product} = this.props;
    return(
      <div>
        <TextField value={product} onChange={this.setProduct} floatingLabelText="Product" hintText="Product" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
