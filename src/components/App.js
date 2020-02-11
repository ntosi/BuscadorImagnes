import React from 'react';
import axios from 'axios'
import Clock from './Clock';
import SearchBar from './SearchBar'

class App extends React.Component{
  
  onSearchSubmit(term){
     
    axios.get('https://api.unsplash.com/search/photos',{
      params:{ query: term } ,
      headers:{
        Authorization: 'Client-ID 4c8a595e589ad737a363dfb7e6fc4e64ea9ccdf21df8eab6bb4c0a086c1ca42c'
      }
    })


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