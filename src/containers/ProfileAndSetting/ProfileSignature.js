import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import SignatureCanvas from 'react-signature-canvas'


export default class ProfileSignature extends Component{
  constructor(props){
    super(props);

    }

    render(){
      return(
        <div>
          <div>
            <img style={{maxHeight:400}} src={"https://media.giphy.com/media/h7DyKGq716JMI/giphy.gif"} />
          </div>
        </div>
    )
  }
}
