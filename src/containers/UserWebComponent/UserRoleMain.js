import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import UserRoleTable from './UserRoleTable.js';
import UserRoleButtonFloat from './UserRoleButtonFloat.js';
import UserRoleCreateForm from './UserRoleCreateForm.js';
export default class UserRoleMain extends Component{
  constructor(props){
    super();
    this.state={
      content:true
    }
  }
  renderContent=()=>{
    var {content} = this.state;
    if(content == true){
      return <UserRoleTable />;
    }else {
      return <UserRoleCreateForm />
    }
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  render(){
    return(
       <div>
          {this.renderContent()}
          <UserRoleButtonFloat toggleContent={this.toggleContent} content={this.state.content} />
       </div>
    )
  }
}
