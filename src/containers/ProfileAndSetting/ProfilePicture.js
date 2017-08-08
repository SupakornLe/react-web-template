import React,{Component} from 'react';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';

export default class ProfilePicture extends Component{
  constructor(props){
    super(props);

    }
    render(){
      return(
        <div>
          <div>
            <img style={{maxHeight:300}} src={"https://media.giphy.com/media/3o6Zt62PeJeFUDwBUI/giphy.gif"} />
          </div>
          <div>
            <TextField label="browse" type="file" />
          </div>
        </div>
    )
  }
}
