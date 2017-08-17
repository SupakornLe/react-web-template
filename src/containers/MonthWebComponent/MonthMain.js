import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import MonthTable from './MonthTable.js';
import MonthCreateForm from './MonthCreateForm.js';
import MonthButtonFloat from './MonthButtonFloat.js';

export default class MonthMain extends Component {
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
      return <MonthTable/>;
    }else {
      return <MonthCreateForm/>
    }
  }
  render(){
    return(
      <div>
        {this.renderContent()}
        <MonthButtonFloat toggleContent={this.toggleContent} content={this.state.content}/>
      </div>
    )
  }
}
