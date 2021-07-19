import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      student: ''
    }

    this.getRandomStudent = this.getRandomStudent.bind(this);
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.studentlist.length);
    // Todo: Add your logic here to grab one random student
    this.setState({
      student: this.props.studentlist[ind]
    })
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.student.imageUrl}></img>
          <h1>{this.state.student.name}</h1>
        </div>
        <button onClick={this.getRandomStudent}>Randomize</button>
      </div>
    )
  }
}