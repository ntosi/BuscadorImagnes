import React from 'react';
import Clock from './Clock';
import SearchBar from './SearchBar'

const App = () =>{
  return (
    <div>
      <SearchBar />
      hola
      la hora es:<Clock />
    </div>
  )
}

export default App