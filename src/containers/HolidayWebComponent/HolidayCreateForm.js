import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FormHoliday from './FormHoliday';
import FormDescriptionTh from './FormDescriptionTh';
import FormDescriptionEn from './FormDescriptionEn';
export default class HolidayCreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {holiday:'',description_th:'',description_en:''}
  }
  submit=()=>{
    var {holiday} = this.state;
    console.log(this.state.holiday);
  }
  renderButtonSubmit=()=>{
    var {holiday} = this.state;
    if(holiday.length>4!="" || 1){
      return (<div>
        <RaisedButton fullWidth={true} primary={true} backgroundColor='#03A9F4' label="Save" onClick={()=>this.submit()} />
      </div>);
    }else {
      return <spam />
    }
  }
  setHoliday = (holiday) => this.setState({holiday});
  setDescriptionTh = (description_th) => this.setState({description_th});
  setDescriptionEn = (description_en) => this.setState({description_en});
  render(){
    var {holiday,description_th,description_en}=this.state;
    return(
      <div>
      <div><h2>Create Holiday</h2></div>
      <FormHoliday value={holiday} setHoliday={this.setHoliday} />
      <FormDescriptionTh value={description_th} setDescriptionTh={this.setDescriptionTh} />
      <FormDescriptionEn value={description_en} setDescriptionEn={this.setDescriptionEn} />
            <div>
              {this.renderButtonSubmit()}
            </div>
      </div>
    )
  }
}
