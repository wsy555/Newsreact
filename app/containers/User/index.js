import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
    rootUser: {
        flexGrow: 1,
        marginTop: 10,
    },
    paper: {
        padding: 16,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    button: {
        margin: theme.spacing.unit,
    },
});

class User extends React.Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.rootUser}>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.paper}>用户中心</Paper>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs>
                        <Paper className={classes.paper}>
                            <p>用户名：{this.props.userinfo.username}</p>
                            <p>密码：{this.props.userinfo.password}</p>

                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
    componentDidMount(){

    }
}

User.propTypes = {
    classes: PropTypes.object.isRequired,
};

User = withStyles(styles)(User)

module.exports = connect(
    state=>{
        return {
            userinfo:state.userinfo
        }
    }
)(User);