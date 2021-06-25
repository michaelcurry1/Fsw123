import { v4 as uuidv4 } from "uuid";

export const todos = [
    {text:'Go To Gym'},
    {text:'Do Laundry'},
    {text:'Food Shopping'},
    {text:'Do Homework'}
] 
export const listoftodos = [
    {
      id: uuidv4(),
      text:"go to gym",
      isCompleted: true
    },
    {
      id: uuidv4(),
      text: "do laundry",
      isCompleted: false
    },
    {
      id: uuidv4(),
      text: "food shopping",
      isCompleted: false
    }, 
    {
      id: uuidv4(),
      text: "do homework",
      isCompleted: true
    }
  ]

export default todos