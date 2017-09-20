import React from 'react';
import Location from '../Utilities/Location';
import Trie from '../Utilities/Trie';
import Api from '../Utilities/Api';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class Search extends React.Component {
  constructor() {
    super();
    this.trie = {};

    this.state = {
      inputLocation: '',
      clicked: false,
      suggestions: [],
    };

    this.inputChange = this.inputChange.bind(this);
    this.buttonChange = this.buttonChange.bind(this);
    this.inputSelect = this.inputSelect.bind(this);
  }


  componentDidMount() {
    const trie = new Trie();
    trie.populate(Location);
    this.trie = trie;
  }

  getVal(e) {
    const trieSuggestions = this.trie.suggest(e);
    this.setState({
      inputLocation: e,
      suggestions: trieSuggestions,
    });
  }

  handleClick(e) {
    this.props.Api(e.target.innerHTML);
  }

  inputChange(val) {
    this.getVal(val);
  }

  inputSelect(val) {
    this.props.returnLocation(val);
    this.setState({
      inputLocation: val,
    });
  }

  buttonChange() {
    this.props.retrieveData();
    this.setState({ clicked: true });
  }

  render() {
    return (
      <div>
        <Select
          className='inputSelection'
          name='form-field-name'
          value={this.state.inputLocation}
          options={this.state.suggestions}
          onChange={this.inputSelect}
          onInputChange={this.inputChange} />
        <button
          className = 'search-button'
          type = 'submit'
          onClick = {this.buttonChange} >
          Press Start
        </button>
      </div>

    );
  }

}
