import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import SignaturePad from 'signature_pad'


export default class ProfileSignature extends Component{
  constructor(props){
    super(props);

    }

    render(){
      return(
        <div>
          <div>
            <img style={{maxHeight:400}} src={"https://media.giphy.com/media/gsZ798xbl4sPC/giphy.gif"} />
          </div>
          <div>
            <canvas id="signature-pad" class="signature-pad" ></canvas>
          </div>
        </div>
    )
  }
}
