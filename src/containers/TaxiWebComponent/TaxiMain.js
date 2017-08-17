import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TaxiTable from './TaxiTable.js';
import TaxiCreateForm from './TaxiCreateForm.js';
import TaxiButtonFloat from './TaxiButtonFloat.js';

export default class TaxiMain extends Component {
  constructor(props) {
    super(props);
    this.state={content:true}
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  renderContent=()=>{
    var {content}=this.state;
    if (content==true){
      return <TaxiTable />;
    }else {
      return <TaxiCreateForm />
    }
  }
  render(){
    return(
      <div>
        {this.renderContent()}
        <TaxiButtonFloat toggleContent={this.toggleContent} content={this.state.content}/>
      </div>
    )
  }
}
