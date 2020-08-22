import React from 'react'; 
import * as qs from 'query-string';
import { useLocation } from 'react-router-dom';
import Header from './Header'; 
import './Details.css'; 
import Grid from '@material-ui/core/Grid'; 
import Map from './Map'; 

class Details extends React.Component{

    state = {
        data : '',
        loading : true,
        menus : ''
    }



    async componentDidMount(){
        let url = `https://us-restaurant-menus.p.rapidapi.com/restaurant/${this.props.location.pathname.slice(9)}/menuitems?page=1`; 

        
        await fetch (url, {
            "method" : "GET", 
            "headers" : {
                "x-rapidapi-host": "us-restaurant-menus.p.rapidapi.com",
                "x-rapidapi-key": "4fc1b63d54msh5b49fb5ab2014a2p1a5ef2jsn6846ee94d7ca"
            }

        }).then(response => response.json()).then(data=>this.setState({data})); 

        this.setState({loading : false});

        console.log(this.state.data);


    }
    
    renderDetails(){

        const details = this.state.data.result.data.map(detail => {
            return (
                <div>
                    <Grid item xs = {12} sm = {12} md = {12} style = {{marginBottom : 10, marginTop : 10}} >
                <div class = "item">
                   <div class="ui card">
                        <div class="content">
                            <div class="header menu_header">{detail.menu_item_name}</div>
                            <div class="meta">
                            <span class="right floated time">{detail.menu_item_pricing? "" : detail.menu_item_pricing[0].priceString}</span>
                            <span class ="left floated category">{detail.subsection}</span>
                            </div>
                           
                        </div>
                        <div class = "extra content">
                        <div class="description">
                                 {detail.menu_item_description? detail.menu_item_description : "No description available"}

                        </div>
                        </div>
                        </div>
                </div>
                </Grid>

                </div>
            )
        })

        return details;

    }




    render() {
        return(
            <div>
                <div class = "headerTitle">
            {this.state.loading? <Header title = "" /> : <Header title = {this.state.data.result.data[0].restaurant_name} /> }
            {this.state.loading? "" : <h3>{this.state.data.result.data[0].address.formatted}</h3>} 
            {this.state.loading? "" : <h4 class = "price_range">{this.state.data.result.data[0].price_range}</h4>} 
            {this.state.loading? "" : <h4 class = "">{this.state.data.result.data[0].restaurant_phone}</h4>} 
            {this.state.loading? "" : <h4 class = "">{this.state.data.result.data[0].restaurant_hours}</h4>} 

                </div>
            <div class = "container">

           
            <h1>Menu</h1>
            <Grid item style = {{display : 'flex'}} container spacing = {3} >

            {this.state.loading? "" : this.renderDetails()};

            </Grid>
            </div>
            </div>
            ) 
          
    }
}

export default Details; 