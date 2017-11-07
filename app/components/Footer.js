import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

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
        width:250,
        height:180
    }
});

class Footer extends React.Component{
    render(){
        const { classes } = this.props;
        return (
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs>
                            <Paper className={classes.paper}>版权所有 CopyRight@2017-2018</Paper>
                        </Grid>
                    </Grid>
                </div>
        )
    }
}
Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};
module.exports = withStyles(styles)(Footer);;