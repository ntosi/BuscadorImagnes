import React from 'react';
import Clock from './Clock';
import SearchBar from './SearchBar'

const App = () =>{
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      
      la hora es:<Clock />
      <SearchBar />
      
      
    </div>
  )
}

export default App