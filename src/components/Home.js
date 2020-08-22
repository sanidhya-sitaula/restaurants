import React from 'react';
import '../App.css';
import Restaurants from './Restaurants'; 
import Header from './Header'; 
import Maps from './Map'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Details from './Details'; 
import SearchBar from './SearchBar'; 
import RestSearch from './RestSearch'; 

class App extends React.Component{

  state = {
    'lat' : '',
    'long' : '',
    'loading' : false,
     'data' : '',
     'searchTerm' : '',
  }

  //set the data by receiving the response from Restaurants 
  setData = (restaurant_data) => {
    this.setState({data : restaurant_data})
    console.log(this.state.data);
  } 


  componentDidMount(){

    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({'lat' : position.coords.latitude, 'long' :position.coords.longitude, 'loading' : true}); 
      });
  
  }

  onTermSubmit = term => {
    
    this.setState( {'searchTerm' : term} ); 
  
    }

  render(){
    return (
      <div>
          <Router>
            <Route path = '/details' exact component = {Details} />
        </Router>
      <div class = "container">
        <Header title = "Restaurants Near You"/>
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        {this.state.searchTerm?<div class = "searchResults"> <RestSearch val = {this.state.searchTerm} >Search Results </RestSearch> </div>:
        <div>
        <div class = "rest-content">
          {this.state.loading? <Restaurants parentCallback = {this.setData} lat = {this.state.lat} long = {this.state.long} search = {false} />: <div>Loading...</div> }
        </div>
        <div class = "map">
          <h1 class = "title">Map View</h1>
          {this.state.data ? <Maps displayPage = {false} lat = {this.state.lat} lon = {this.state.long} data = {this.state.data} /> : <div>Loading maps...</div>}
        </div>
        </div>

}
        
      </div>
  

      </div>
    );
    ; 
  }
}

export default App;