import React,{Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';

    const style = {
      margin: 20,
    };

export default class ApproveTaskNoneSr extends Component{
  constructor(props){
    super(props);
      this.state = {subject:'ศึกษา Reactjs',date:'2017-08-15',time:'10:00',expect_duration:'2',
      task_sid:1,picture:'https://media.giphy.com/media/8OlT82jKm6Ugg/giphy.gif',staff_name:'Autsakorn Tanyianniti'}
    }

    approve = () => {
      var {subject,date,time,expect_duration,task_sid,picture,staff_name} = this.state;
      console.log(this.state);
    }

    rejected = () => {
      var {subject,date,time,expect_duration,task_sid,picture,staff_name} = this.state;
      console.log(this.state);
    }

    render(){
        var {subject,date,time,expect_duration,task_sid,picture,staff_name} = this.state;
      return(
        <div>
          <div>
            <img style={{maxHeight:300}} src={picture} style={style} />
          </div>
          <br />
          <div>
            Subject : {subject}
          </div>
          <br />
          <div>
            Date : {date}
          </div>
          <br />
          <div>
            Time : {time}
          </div>
          <br />
          <div>
            Expect Duration : {expect_duration}
          </div>
          <div>
            <RaisedButton label="Approve" primary={true} style={style} onClick={()=>this.approve()} />
            <RaisedButton label="Rejected" secondary={true} onClick={()=>this.rejected()} />
          </div>
        </div>
    )
  }
}
