import React from 'react'
import PropTypes from 'prop-types';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/index'


import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

const styles = theme => ({
    root: {
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

class Login extends React.Component{
    constructor(props, context){
        super(props, context)
        this.state = {
            username:'',
            password:''
        }
    }
    handleChange(e){
        this.setState({
            username:e.target.value
        })
    }
    handleChangePass(e){
        this.setState({
            password:e.target.value
        })
    }
    render() {
            const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <Grid container spacing={24}>
                        <Grid item xs>
                            <Paper className={classes.paper}>用户登录</Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={24}>
                        <Grid item xs>
                            <Paper className={classes.paper}>
                                <form className={classes.container} noValidate autoComplete="off">
                                    <TextField
                                        id="name"
                                        label="用户名"
                                        value={this.state.username}
                                        className={classes.textField}
                                        onChange={this.handleChange.bind(this)}
                                        margin="normal"
                                    />
                                    <br/>
                                    <TextField
                                        id="password"
                                        label="密码"
                                        className={classes.textField}
                                        type="password"
                                        autoComplete="current-password"
                                        margin="normal"
                                        onChange={this.handleChangePass.bind(this)}
                                    />
                                    <br/>
                                    <Button onClick={this.sub.bind(this)} raised color="primary" className={classes.button}>
                                        登录
                                    </Button>
                                </form>
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            )
    }
    componentDidMount(){
        if(this.props.userinfo.username){
            this.props.history.push('/user')
        }else{
            this.setState({
                username:''
            })
        }
    }
    sub(){
        this.props.actions.loginUser({
            username:this.state.username,
            password:this.state.password
        })
        this.props.history.push('/user')
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
};
Login = withStyles(styles)(Login)

module.exports = connect(
    state=>{
        return {
            userinfo:state.userinfo
        }
    },
    dispache=>{
        return {
            actions:bindActionCreators(actions,dispache)
        }
    }
)(Login);