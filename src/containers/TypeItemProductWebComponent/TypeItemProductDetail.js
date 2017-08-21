import React,{Component} from 'react';
import FormType from './FormType';
import FormItem from './FormItem';
import FormProduct from './FormProduct';
export default class TypeItemProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid:'',type:'',item:'',product:'',loaded:false
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({type:'Hardware',item:'PC',product:'lenovo',loaded:true});
  }
  setType=(type)=>this.setState({type});
  setItem=(item)=>this.setState({item});
  setProduct=(product)=>this.setState(product);
  render(){
    var {type,item,product,loaded} = this.state;
    if(loaded){
    return(
        <div>
          <div>
            <FormType type={type} setType={this.setType} />
            <FormItem item={item} setItem={this.setItem} />
            <FormProduct product={product} setProduct={this.setProduct} />
          </div>
        </div>
      );
    }else{
      return (<div>Loading...</div>)
    }
  }
  }
