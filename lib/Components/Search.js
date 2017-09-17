import React from 'react';
import Location from '../Utilities/Location';
import Trie from '../Utilities/Trie';
import Api from '../Utilities/Api';

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
  }


  componentDidMount() {
    const trie = new Trie();
    trie.populate(Location);
    this.trie = trie;
  }

  getVal(e) {
    const suggestions = this.trie.suggest((e.target.innerHTML || e.target.value));
    this.setState({
      inputLocation: e.target.innerHTML || e.target.value,
      suggestions,
    });
  }

  handleClick(e) {
    this.props.Api(e.target.innerHTML);
  }

  inputChange(e) {
    this.setState({
      inputLocation: e.target.value,
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
        <input
          type = 'text'
          placeholder = 'Search'
          value = {this.state.inputLocation}
          onChange = {this.inputChange} />
        <button
          onClick = {this.buttonChange}
          >
          Press Start
        </button>
      </div>
    );
  }

}
