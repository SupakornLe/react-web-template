import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import ContactTable from './ContactTable.js';
import ContactCreateForm from './ContactCreateForm.js';
import ContactButtonFloat from './ContactButtonFloat.js';
export default class ContactMain extends Component {
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
      return <ContactTable/>;
    }else {
      return <ContactCreateForm/>
    }
  }
  render(){
    return(
      <div>
        {this.renderContent()}
        <ContactButtonFloat toggleContent={this.toggleContent} content={this.state.content}/>
      </div>
    )
  }
}
