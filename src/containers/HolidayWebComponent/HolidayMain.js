import React,{Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';
import HolidayTable from './HolidayTable.js';
import HolidayCreateForm from './HolidayCreateForm.js';
import HolidayButtonFloat from './HolidayButtonFloat.js';
export default class HolidayMain extends Component {
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
      return <HolidayTable />
    }else {
      return <HolidayCreateForm />
    }
  }
  render(){
    return(
      <div>
        {this.renderContent()}
        <HolidayButtonFloat toggleContent={this.toggleContent} content={this.state.content}/>
      </div>
    )
  }
}
