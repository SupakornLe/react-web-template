import React, {Component} from 'react';

import AssetFormType from './AssetFormType';
import AssetFormItem from './AssetFormItem';
import AssetFormProduct from './AssetFormProduct';
export default class AssetDetail extends Component {
  constructor(props){
    super(props);
    this.state = {sid:'', type:'', item:'', product:'', loaded:false}
  }

  componentDidMount(){
    this.loadData();
  }
  loadData = () => {
    console.log('loadData', this.state.sid);
    this.setState({type:'Hardware', item:'PC', product:'lenovo', loaded:true});

  }
  setType = (type) => this.setState({type})
  setItem = (item) => this.setState({item})
  setProduct = (product) => this.setState({product})
  render(){
    var {type, item, product, loaded} = this.state;
    console.log('debug type',type);
    if(loaded){
      return (
        <div>
          <div>
            <AssetFormType setType={this.setType} type={type} />
            <AssetFormItem setItem={this.setItem} item={item} />
            <AssetFormProduct setProduct={this.setProduct} product={product} />
          </div>
        </div>);
    }else{
      return (<div>Loading...</div>)
    }
  }
}
