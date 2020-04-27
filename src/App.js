import React, {Component} from 'react';
import {CardList} from './components/card-list.component.jsx';
import './App.css';
import {SearchBox} from './components/search-box.component.jsx';


class App extends Component {
  constructor() {
      super();
      this.state = {
        monster:[],
        searchField:''
      }
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monster: users}));
  }
  handleChange = e => {
    this.setState({searchField: e.target.value});
  };

  render() {
    const {monster, searchField} = this.state;
    const filteredMonsters = monster.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
          placeholder = 'search monster'
          handleChange = {this.handleChange}></SearchBox>
        <CardList monsters = {filteredMonsters} /> 
      </div>
    );
  }
}
export default App;
