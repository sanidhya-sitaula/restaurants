import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import withStyles from "@material-ui/core/styles/withStyles"


const useStyles = makeStyles({
  root: {
    width:300,
    maxWidth: 300,
    height : 'auto',
    marginBottom : 7,
    marginTop : 20, 
    marginLeft:32,
    marginRight:32,
    fontFamily : 'Quicksand',

  },
  media: {
    height: 100,
  },
  link : {
      color : 'black',
      textDecoration : 'None',
      fontFamily : 'Quicksand',
  },
  font : {
  }
 
});

export default function MediaCard(props) {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <a className = {classes.link} href = "#">{props.title}</a>
            </Typography>
            <Typography variant = "caption" display = "block" gutterBottom>
                <span className = {classes.font}>{props.cuisines} Cuisine</span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span className = {classes.font}>{props.address}</span>
    
            </Typography>
          </CardContent>
        </CardActionArea>
  
      </Card>
    );
  }