import React from 'react'; 
import Places from './Places'; 
import Grid from '@material-ui/core/Grid'; 

class RestSearch extends React.Component {

    state = {
        data : '',
        loading : true
    }


    async componentDidMount() {

    let string = this.props.val; 
    let val = encodeURI(`{"restaurant_name"  : "${string}"}`)

    let url2 = `https://us-restaurant-menus.p.rapidapi.com/restaurants/search/fields?fields=${val}`; 
   
    await fetch (url2, {



        "method": "GET",

        "headers" : {
        "X-RapidAPI-Host"  : "us-restaurant-menus.p.rapidapi.com",
        "X-RapidAPI-Key": "4fc1b63d54msh5b49fb5ab2014a2p1a5ef2jsn6846ee94d7ca",
        "useQueryString": true
        },

        "query" : {

        }

    }).then(response2 => response2.json()).then(data => this.setState({data}));


    console.log(this.state.data);

    this.setState({loading : false})
}

    
    render() {

        return (
            <div>
               {this.state.loading? <div>Loading...</div> : 
                       <Grid item style = {{display : 'flex'}} container spacing = {8} >

                         <Places data = {this.state.data} />  
                </Grid>
               }
            </div>
        )
    }

}

export default RestSearch;