// with image
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
  }));

const RestaurantComponent = (props) => {
    // console.log(props)
    const classes = useStyles();
    return (
        <>
        <div className={classes.root} style={{margin:"10px"}}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                    <img className={classes.img} alt="complex" src='' />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="subtitle1">
                            {props.item.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        {props.item.mobile}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        ID: {props.item.u_id}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" style={{ cursor: 'pointer' }}>
                            <Link to={`${props.match.path}/${props.item.u_id}`}>Select Restaurant</Link>
                        </Typography>
                    </Grid>
                    </Grid>
                    <Grid item>
                    {/* <Typography variant="subtitle1">Rs. {props.item.price}</Typography> */}
                    </Grid>
                </Grid>
                </Grid>
            </Paper>
        </div>
        </>
    )
}

export default RestaurantComponent;