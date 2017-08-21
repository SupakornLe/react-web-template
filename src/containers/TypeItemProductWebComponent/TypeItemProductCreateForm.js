import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormType from './FormType';
import FormItem from './FormItem';
import FormProduct from './FormProduct';
export default class TypeItemProductCreateForm extends Component{
  constructor(props){
    super(props);
    this.state = {type:'',item:'',product:''}

  }
  submit = () => {
     var {type} = this.state;
     console.log(this.state);
   }

   renderButtonSubmit = () => {
     var {type} = this.state;
     console.log(type);
     if(type.length>4!=""){
       return (<div>
         <RaisedButton fullWidth={true} primary={true} label="Save" backgroundColor='#03A9F4' onClick={()=>this.submit()} />
       </div>);
     }else {
       return <spam />
     }
   }
  setType =(type)=>this.setState({type});
  setItem =(item)=>this.setState({item});
  setProduct=(product)=>this.setProduct({product});
  render(){
      var {type,item,product}=this.state;
    return(
      <div>
      <div><h2>Create TypeItemProduct</h2></div>
      <FormType value={type} setType={this.setType} />
      <FormItem value={item} setItem={this.setItem} />
      <FormProduct value={product} setProduct={this.setProduct} />
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
