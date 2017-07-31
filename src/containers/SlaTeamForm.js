import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, ListItem, makeSelectable} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
//
let SelectableList = makeSelectable(List);
//
// function wrapState(ComposedComponent) {
//   return class SlaTeamForm extends Component {
//     static propTypes = {
//       children: PropTypes.node.isRequired,
//       defaultValue: PropTypes.number.isRequired,
//     };
//
//     componentWillMount() {
//       this.setState({
//         selectedIndex: this.props.defaultValue,
//       });
//     }
//
//     handleRequestChange = (event, index) => {
//       this.setState({
//         selectedIndex: index,
//       });
//     };
//
//     render() {
//       return (
//         <ComposedComponent
//           value={this.state.selectedIndex}
//           onChange={this.handleRequestChange}
//         >
//           {this.props.children}
//         </ComposedComponent>
//       );
//     }
//   };
// }
//
// SelectableList = wrapState(SelectableList);

class ListExampleSelectable extends React.Component{
  handleSearchType = (value) => {

  }
  render(){
      return(
        <div>
        <TextField
         floatingLabelText="Search Team"
         onChange={(e)=>{this.handleSearchType(e.target.value)}}
        />
        <br />
        <br />
        <SelectableList defaultValue={1}>
          <ListItem
            value={1}
            primaryText="Team A"
          />
          <ListItem
            value={2}
            primaryText="Team B"
          />
          <ListItem
            value={3}
            primaryText="Team C"
          />
          <ListItem
            value={4}
            primaryText="Team D"
          />
          <ListItem
            value={5}
            primaryText="Team E"
          />
        </SelectableList>
      </div>
    )
  }
}

export default ListExampleSelectable;
