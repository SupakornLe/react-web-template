import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class SlaForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {subject:''};
  }
  submit = () => {
    console.log(this.state);

  }
  render(){
    var {subject} = this.state;
    const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};
    return(
      <Tabs
        value={this.state.value}
        onChange={this.handleChange}
      >
        <Tab label="Project" value="project">
          <div>
            <h2 style={styles.headline}>Project Content</h2>
          </div>
        </Tab>
        <Tab label="Contract" value="contract">
          <div>
            <h2 style={styles.headline}>Contract</h2>
            <p>Content</p>
          </div>
        </Tab>
        <Tab label="Company" value="company">
          <div>
            <h2 style={styles.headline}>Company</h2>
            <p>Content</p>
          </div>
        </Tab>
        <Tab label="Team" value="team">
          <div>
            <h2 style={styles.headline}>Team</h2>
            <p>Content</p>
          </div>
        </Tab>
      </Tabs>
    );
  }
}
