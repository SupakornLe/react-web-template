import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
export default class AssetFormItem extends Component {
  constructor(props) {
    super(props);
  }
  setItem=(e,value)=>{
    this.props.setItem(value);
  }
  render(){
    var {item}=this.props;
    return(
      <div>
        <TextField value={item} onChange={this.setItem} floatingLabelText="Item" hintText="Item" style={{width:'100%'}} type="text" />
      </div>
    )
  }
}
