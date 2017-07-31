import React from 'react';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import TimePicker from 'material-ui/TimePicker';

export default class SlaTeamSuportForm extends React.Component {
  constructor(props){
  super(props)
  this.state={
    dna_unit:'7x24',
    tis_unit:'7x24',
    dct_unit:'7x24'
  }

}
handleDnaUnitChange = (event, index, value) => {
  this.setState({dna_unit:value});
}

handleTisUnitChange = (event, index, value) => {
  this.setState({tis_unit:value});
}

handleDctUnitChange = (event, index, value) => {
  this.setState({dct_unit:value});
}

render(){
  var {dna_unit, tis_unit, dct_unit}=this.state;
  return(
    <div>
      <div className="row">
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 m-b-15 " style={{textAlign:'right'}}>
          <p>Team Support</p>
        </div>
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8 m-b-15 ">
          <div className="row">
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
              <p>DNA</p>
              <p>TIS</p>
              <p>DCT</p>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
            <p><SelectField style={{width:'100%'}}
              floatingLabelText="Unit"
              value={dna_unit}
              onChange={this.handleDnaUnitChange}
            >
              <MenuItem value={"a"} primaryText="7x24" />
              <MenuItem value={"b"} primaryText="5x8" />
            </SelectField>
            </p>
            <p><SelectField style={{width:'100%'}}
              floatingLabelText="Unit"
              value={tis_unit}
              onChange={this.handleTisUnitChange}
            >
              <MenuItem value={"a"} primaryText="7x24" />
              <MenuItem value={"b"} primaryText="5x8" />
            </SelectField>
            </p>
            <p><SelectField style={{width:'100%'}}
              floatingLabelText="Unit"
              value={dct_unit}
              onChange={this.handleDctUnitChange}
            >
              <MenuItem value={"a"} primaryText="7x24" />
              <MenuItem value={"b"} primaryText="5x8" />
            </SelectField>
            </p>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
              <p><TimePicker
                hintText="12hr Format"
              />
              </p>
              <p><TimePicker
                hintText="12hr Format"
              />
              </p>
              <p><TimePicker
                hintText="12hr Format"
              />
              </p>
            </div>
            <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2 m-b-15 ">
              <p><TimePicker
                hintText="12hr Format"
              />
              </p>
              <p><TimePicker
                hintText="12hr Format"
              />
              </p>
              <p><TimePicker
                hintText="24hr Format"
              />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
