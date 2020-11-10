import React, { Component } from 'react'

//form data is handles by the DOM itself
//use a ref to get values from the DOM
class UncontrolledComponents extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    console.log('A name was submitted: ' + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name: 
            <input type='text' ref={this.input} />
        </label>
        <input type='submit' value='Submit' />
      </form>
    )
  }
}

export default UncontrolledComponents