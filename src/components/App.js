import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import HogTile from './HogTile'
import RadioGroup from './RadioGroup'

class App extends Component {

  state = { 
    greaseFilter: 'all',
    sortType: 'none' 
  }

  setGreaseFilter = event => {
    this.setState({greaseFilter: event.target.value})
  }

  greaseFilteredHogs = hogs => {
    switch (this.state.greaseFilter) {
      case 'all':
        return hogs 
      case 'greased':
        return hogs.filter(hog => hog.greased)
      default:
        return hogs 
    }
  }

  setSortType = event => {
    this.setState({ 
      sortType: event.target.value
    })
  }

  sortedHogs = hogs => {
    switch(this.state.sortType) {
      case 'none':
        return hogs
      case 'weight': 
        return [...hogs].sort( (hogA, hogB) => hogA.weight - hogB.weight)
      case 'name':
        return hogs 
      default: 
        return hogs
    }
  }

  render() {

    const displayHogs = this.sortedHogs( this.greaseFilteredHogs( hogs ))

    return (
      <div className="App">
        <Nav />
        <RadioGroup 
        choice={this.state.greaseFilter} 
        changeHandler={this.setGreaseFilter}
        options={['all', 'greased']}
        name='greaseFilter'
        />
        <RadioGroup 
        choice={this.state.sortType}
        changeHandler={this.setSortType}
        options={['none', 'weight', 'name']}
        name='sortType'
        />
        <div className='ui grid container'>
          {displayHogs.map(hog => <HogTile key={hogs.indexOf(hog)} {...hog}  />)}
        </div>
      
      </div> 
    );
  }
}

export default App;
