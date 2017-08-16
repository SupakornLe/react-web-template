import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import NotificationsTable from './NotificationsTable.js';
import NotificationsCreateForm from './NotificationsCreateForm.js';
import NotificationsButtonFloat from './NotificationsButtonFloat.js';
export default class NotificationsMain extends Component {
  constructor(props) {
    super();
    this.state={content:true}
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  renderContent=()=>{
    var {content}=this.state;
    if (content==true){
      return <NotificationsTable/>;
    }else {
      return <NotificationsCreateForm/>
    }
  }
  render(){
    return(
      <div>
        {this.renderContent()}
        <NotificationsButtonFloat toggleContent={this.toggleContent} content={this.state.content}/>
      </div>
    )
  }
}
