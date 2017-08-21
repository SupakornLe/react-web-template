import React,{Component} from 'react';
import FormHoliday from './FormHoliday';
import FormDescriptionTh from './FormDescriptionTh';
import FormDescriptionEn from './FormDescriptionEn';
export default class HolidayDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sid:'',holiday:'',description_th:'',description_en:'',loaded:false
    }
  }
  componentDidMount(){
    this.loadData();
  }
  loadData=()=>{
    console.log('loadData', this.state.sid);
    this.setState({holiday:'2017-08-19',description_th:'วันเสาร์',description_en:'Saturday',loaded:true});
  }
  setHoliday=(holiday)=>this.setState({holiday});
  setDescriptionTh=(description_th)=>this.setState({description_th});
  setDescriptionEn=(description_en)=>this.setState({description_en});
  render(){
    var {holiday,description_th,description_en,loaded} = this.state;
    if(loaded){
    return(
        <div>
          <div>
            <FormHoliday holiday={holiday} setHoliday={this.setHoliday} />
            <FormDescriptionTh description_th={description_th} setDescriptionTh={this.setDescriptionTh} />
            <FormDescriptionEn description_en={description_en} setDescriptionEn={this.setDescriptionEn} />
          </div>
        </div>
      );
    }else{
      return (<div>Loading...</div>)
    }
  }
}
