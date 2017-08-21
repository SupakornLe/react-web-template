import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
export default class AssetFormType extends Component {
  constructor(props){
    super(props);
  }
  setType = (e, value) => {
    this.props.setType(value);
  }
  render(){
    var {type} = this.props;
    return (
      <div>
          <TextField
            value={type}
            onChange={this.setType}
            floatingLabelText="Type" hintText="Type" style={{width:'100%'}} type="text"  />
      </div>
    )
  }
}
