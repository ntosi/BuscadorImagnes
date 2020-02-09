import React from 'react';
import Clock from './Clock';
import SearchBar from './SearchBar'

const App = () =>{
  return (
    <div className="ui container" style={{ marginTop: '10px'}}>
      <SearchBar />
      hola
      la hora es:<Clock />
    </div>
  )
}

export default App