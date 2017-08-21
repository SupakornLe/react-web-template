import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormType from './FormType';
export default class TypeItemProductCreateForm extends Component{
  constructor(props){
    super(props);
    this.state = {type:''}

  }
  submit = () => {
     var {role_name} = this.state;
     console.log(this.state);
   }

   renderButtonSubmit = () => {
     var {role_name} = this.state;
     console.log(role_name);
     if(1 || 1){
       return (<div>
         <RaisedButton fullWidth={true} primary={true} label="Save" onClick={()=>this.submit()} />
       </div>);
     }else {
       return <spam />
     }
   }
   setType =(type)=>this.setState({type});
  render(){
      var {type}=this.state;
    return(
      <div>
      <div><h2>Create TypeItemProduct</h2></div>
      <FormType value={type} setType={this.setType} />
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )


  }
}
