import React,{Component} from 'react';
import AssetTable from './AssetTable.js';
import AssetCreateForm from './AssetCreateForm.js';
import AssetButtonFloat from './AssetButtonFloat.js';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
export default class AssetMain extends Component {
  constructor(props) {
    super();
    this.state = {content:true}
  }
  renderContent=()=>{
    var {content} = this.state;
    if (content==true){
      return <AssetTable />
    }else {
      return <AssetCreateForm />
    }
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  render(){
    return(
      <div>
        {this.renderContent()}
        <AssetButtonFloat toggleContent={this.toggleContent} content={this.state.content}/>
      </div>
    )
  }
}
