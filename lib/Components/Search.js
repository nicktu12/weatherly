import React from 'react';
import Location from '../Utilities/Location';
import Trie from '../Utilities/Trie';
import Api from '../Utilities/Api';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

console.log(Trie);


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
    this.setState({
      inputLocation: val
    });
  }

  buttonChange() {
    this.props.retrieveData();
    this.props.handleButtonClick();
    this.setState({ clicked: true });
  }



  render() {

    // this.state.location === '' ? this.state.suggestions = [] : true;
    //
    // const mappedSuggestions = this.state.suggestions.map((city, i) => <button className="city-name" key={i} onClick={
    //   (e) => this.handleClick(e)
    // }>{city}</button>);

    return (
      // <div className="search">
      //   <div className="user-inpts">
      //     <input type="text" placeholder="Enter a City" className="city-search" onChange={this.getVal.bind(this)}/>
      //     <button type="submit" className="sub-btn" onClick = {this.buttonChange} onClick={() => { this.props.Api(this.state.location)}}>Submit</button>
      //   </div>
      //   <div className="outputs">
      //     <section className="addSuggestions">{mappedSuggestions}</section>
      //   </div>
      // </div>
      <div>
        <Select
          name='form-field-name'
          value={this.state.inputLocation}
          options={this.state.suggestions}
          onChange={this.inputSelect}
          onInputChange={this.inputChange} />
        <button
          onClick = {this.buttonChange} >
          Press Start
        </button>
      // </div>
      // <div>
      //   <input
      //     type = 'text'
      //     placeholder = 'Search'
      //     value = {this.state.inputLocation}
      //     onChange = {this.inputChange} />
      //
      //   //   {this.state.suggestions.length > 0 &&
      //   //     // <Dropdown
      //   //     //   options={this.state.suggestions}
      //   //     //   onChange={this._onSelect}
      //   //     //   value=''
      //   //     //   placeholder='Select an option' />
      //   // }
      //
      // <div>
    );
  }

}
