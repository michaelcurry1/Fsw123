import React,{ Component } from 'react'
import './RollDice.css'
import Die from './Die'
  
class RollDice extends Component{
  
  constructor(){
    super()
      
    // States
    this.state = {
      die1 : 1,
      die2 : 1
    }
    this.roll = this.roll.bind(this)
  }
  roll(){
    let d1=[this.state.die1]
    let d2=[this.state.die2]
    d1=Math.ceil(Math.random()*6)
    d2=Math.ceil(Math.random()*6)
    this.setState(prevState =>{
      return{
        die1: d1,
        die2: d2
      }
    })
  }
  
  render(){
    return(
      <div>
        <Die pips={this.state.die1} />
        <Die pips={this.state.die2} />
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    )
  }
}
  
export default RollDice