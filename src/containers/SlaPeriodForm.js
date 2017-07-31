import React from 'react';
import TimePicker from 'material-ui/TimePicker';

export default class SlaPeriodForm extends React.Component {
  constructor(props){
  super(props)
}
render(){
  return(
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 " style={{textAlign:'right'}}>
          <p>Period</p>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 m-b-15 ">
          <div className="row">
            <TimePicker
              hintText="12hr Format"
            />
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
            <TimePicker
              hintText="12hr Format"
            />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
