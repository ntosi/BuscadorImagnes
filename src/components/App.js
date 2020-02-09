import React from 'react';
import Clock from './Clock';
import SearchBar from './SearchBar'

class App extends React.Component{
  
  onSearchSubmit(term){
    console.log(term)

  }
  
  render(){
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      
      la hora es:<Clock />
      <SearchBar onSubmit={this.onSearchSubmit}/>
      
      
    </div>
    )
  }
}

export default App