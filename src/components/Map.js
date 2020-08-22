import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api';


class MapContainer extends React.Component{
  

    state = {
        isOpen : false,
        'lat' : this.props.lat, 
        'lon' : this.props.lon
    }


    mapStyles = {        
    height: "80vh",
    width: "100%"};
  
    defaultCenter = {
        lat: this.state.lat, lng: this.state.lon
  }

  handleToggleOpen = () => {

	this.setState({
		isOpen: true
	});
}

handleToggleClose = () => {
	this.setState({
		isOpen: false
	});
}

  render(){
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAOfytgTSy-bypCikaz1t56NL7o5AqR4GM'>
        <GoogleMap
          mapContainerStyle={this.mapStyles}
          zoom={13}
          center={this.props.lat ? this.defaultCenter : ''}>

   {this.props.data.result.data.map(place => {
              return (
                  <Marker key = {place.name} position = {{'lat' : place.geo.lat, 'lng' : place.geo.lon}} onClick={() => this.handleToggleOpen()}>
                      { this.state.isOpen &&
                       <InfoWindow>
			                <h4>{place.restaurant_name}</h4>
		                </InfoWindow>
             }
                      </Marker>

              )
          })   
        }
           </GoogleMap>

        
     </LoadScript>
  )
        
}
}

export default MapContainer;