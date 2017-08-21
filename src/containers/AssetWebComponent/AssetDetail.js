import React, {Component} from 'react';

import AssetFormType from './AssetFormType';
import AssetFormItem from './AssetFormItem';

export default class AssetDetail extends Component {
  constructor(props){
    super(props);
    this.state = {sid:'', type:'', item:'', loaded:false};
  }

  componentDidMount(){
    this.loadData();
  }

  loadData = () => {
    this.setState({sid:3,type:'fewfhtjynrt',created_by:'Nat', created_datetime:'2017-01-01 18:55:00', loaded:true});

  }
  setType = (type) => this.setState({type})
  setItem = (item) => this.setState({item})
  render(){
    var {type,loaded} = this.state;
    console.log('debug type',type);
    if(loaded){
      return (<div>
          <div>
            <AssetFormType setType={this.setType} type={type} />
            <AssetFormItem setItem={this.setItem} item={item} />
          </div>
        </div>);
    }else{
      return (<div>Loading...</div>)
    }
  }
}
