import React,{Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ContentClear from 'material-ui/svg-icons/content/clear';

  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
      zIndex:1000}
    }
  export default class UserButtonFloat extends Component{
    constructor(props){
      super(props);
    }
    renderButton = () => {
      return (<FloatingActionButton onTouchTap = {()=>this.props.toggleContent()} backgroundColor='#03A9F4' style={styles.floatingActionButton}>
        {
          (this.props.content)?<ContentAdd/>:<ContentClear />
        }
      </FloatingActionButton>);
    }
    render(){
      return(
        <div>
        {this.renderButton()}
        </div>
      )
    }
  }
