import React from 'react'; 
import MediaCard from './MediaCard';
import Grid from '@material-ui/core/Grid'; 
import { Link } from 'react-router-dom'; 


function Places (resdata) {

    console.log(resdata);
    const places = resdata.data.result.data.slice(0,20).map(place => {
                    


        return (
            <div>
             <Grid item xs = {12} sm = {12} md = {12} style = {{marginBottom : 10, marginTop : 10}} >
            <Link to = {"/details/" + place.restaurant_id} 
            > {place.cuisines.length != 0 ? <MediaCard variant = "outlined" title = {place.restaurant_name} cuisines = {place.cuisines[0]} address = {place.address.formatted} price = {place.price_range}/> : <MediaCard variant = "outlined" title = {place.restaurant_name} cuisines = '' address = {place.address.formatted} price = {place.price_range}/> 
            
            
            }</Link>
            </Grid>
            </div>
        )
        
    })

    return places; 
}

export default Places;