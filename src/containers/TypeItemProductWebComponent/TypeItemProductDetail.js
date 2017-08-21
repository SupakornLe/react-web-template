import React,{Component} from 'react';
import FormType from './FormType';
export default class TypeItemProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid:this.props.sid,
      type:''}
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({type:'....'});
  }
  setType=(type)=>this.setState({type});
  render(){
    var {type} = this.state;
    return(
      <div>
        <FormType value={type} setType={this.setType} />
      </div>
    )
  }
}
