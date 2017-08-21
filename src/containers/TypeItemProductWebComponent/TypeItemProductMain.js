import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import TypeItemProductButtonFloat from './TypeItemProductButtonFloat';
import TypeItemProductCreateForm from './TypeItemProductCreateForm';
import TypeItemProductTable from './TypeItemProductTable';

export default class TypeItemProductMain extends Component{
  constructor(props){
    super(props);
    this.state={
      content:true
    }
  }
  renderContent=()=>{
    var {content} = this.state;
    if(content == true){
      return <TypeItemProductTable />;
    }else {
      return <TypeItemProductCreateForm />
    }
  }
  toggleContent=()=>{
    this.setState({content:!this.state.content});
  }
  render(){
    return(
       <div>
          {this.renderContent()}
          <TypeItemProductButtonFloat toggleContent={this.toggleContent} content={this.state.content} />
       </div>
    )
  }
}
