import React from 'react';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      inputLocation: ''
    }

    this.inputChange = this.inputChange.bind(this)
  }

  render() {
    return (
      <div>
        <input type = 'text'
          placeholder = 'Search'
          value = {this.state.inputLocation}
          onChange = {this.inputChange}>
        </input>
        <button type = 'submit'
          onClick={this.props.retrieveData}
          >
          Press Start
        </button>
      </div>
    )
  }

  inputChange(e) {
    this.setState({inputLocation: e.target.value})
  }
}
