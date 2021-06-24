
import React, {Component} from 'react'
import './Die.css'
  
class Die extends Component{
  constructor(props){
    super(props)
  }
  render(){
    let imgSrc = './images/' + this.props.pips + '.png'
    return(
      <img src={imgSrc} alt="dice face" />
    )
  }
}
  
export default Die