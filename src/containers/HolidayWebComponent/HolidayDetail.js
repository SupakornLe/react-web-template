import React,{Component} from 'react';
import FormHoliday from './FormHoliday';
import FormDescriptionTh from './FormDescriptionTh';
import FormDescriptionEn from './FormDescriptionEn';
export default class HolidayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid:this.props.sid,
      holiday:'',description_th:'',description_en:''
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({holiday:'2017-08-19',description_th:'วันเสาร์',description_en:'Saturday'});
  }
  setHoliday=(holiday)=>this.setState({holiday});
  setDescriptionTh=(description_th)=>this.setDescriptionTh({description_th});
  setDescriptionEn=(description_en)=>this.setDescriptionEn({description_en});
  render(){
    var {holiday,description_th,description_en} = this.state;
    return(
      <div>
        <FormHoliday value={holiday} setHoliday={this.setHoliday} />
        <FormDescriptionTh value={description_th} setDescriptionTh={this.setDescriptionTh} />
        <FormDescriptionEn value={description_en} setDescriptionEn={this.setDescriptionEn} />
      </div>
    )
  }
}
