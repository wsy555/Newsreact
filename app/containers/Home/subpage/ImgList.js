import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import {Link} from 'react-router-dom';

import image from '../../../static/images/WX201711021720142x.png'
import image2 from '../../../static/images/WX201711021720232x.png'
const tileData = [
    {
        img: image,
        title: 'Image',
        author: 'author1',
    },
    {
        img: image2,
        title: 'Image',
        author: 'author2',
    },
    {
        img: image,
        title: 'Image',
        author: 'author3',
    },
    {
        img: image2,
        title: 'Image',
        author: 'author4',
    },
    {
        img: image,
        title: 'Image',
        author: 'author5',
    },
    {
        img: image2,
        title: 'Image',
        author: 'author6',
    },
    {
        img: image,
        title: 'Image',
        author: 'author7',
    },
    {
        img: image2,
        title: 'Image',
        author: 'author8',
    },
]

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: 30,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img:{
        width:230,
        height:180
    }
});
class ImgList extends React.Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container spacing={24}>
                    {
                        tileData.map(function(item){
                            return (
                                <Grid item sm={3} xs={12} key={item.author}>
                                    <Paper className={classes.paper}>
                                        <Link to="/detail/1111">
                                            <img className={classes.img} src={item.img} />
                                        </Link>
                                    </Paper>
                                </Grid>
                            )
                        })
                    }

                </Grid>

                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>xs=6</Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper className={classes.paper}>xs</Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
ImgList.propTypes = {
    classes: PropTypes.object.isRequired,
};
module.exports = withStyles(styles)(ImgList);