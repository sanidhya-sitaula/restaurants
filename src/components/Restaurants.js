import React from 'react'; 
import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid'; 
import { Link } from 'react-router-dom'; 
import Places from './Places'; 

class Restaurants extends React.Component{

    state = {
        data : '', 
    }



    async componentDidMount (){

      



        let url = `https://us-restaurant-menus.p.rapidapi.com/restaurants/search/geo?page=1&lon=${this.props.long}8&lat=${this.props.lat}&distance=1`; 

        await fetch (url, {

            "method": "GET",

            "headers" : {
               "X-RapidAPI-Host"  : "us-restaurant-menus.p.rapidapi.com",
               "X-RapidAPI-Key": "150f594e71mshd2646f768ee0f90p1b0d7ejsne13ac63cc8ab",
	            "useQueryString": true
            }

        }).then(response => response.json()).then(data => this.setState({data}));

        
        this.props.parentCallback(this.state.data); 
    

   

    }

    

    renderResults() {
        
        if (!this.state.data){
            return <div>Loading...</div>; 
        }

        else {
            return <Places data = {this.state.data}/>
        }
    }
   

    render() {
        return(
        <div>
        <Grid item style = {{display : 'flex'}} container spacing = {8} >

            {this.renderResults()} 
        </Grid>        
        </div>
    
        );
}
}

export default Restaurants;