import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/index'

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import Sidelist from '../components/Sidelist'

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3,
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
});

class Head extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            left: false
        };
    }
    render(){
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="contrast"
                            aria-label="Menu"
                            onClick={this.toggleDrawer.bind(this,'left', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography type="title" color="inherit" className={classes.flex} >
                            Title
                        </Typography>
                        <Button color="contrast" onClick={this.back.bind(this)}>返回</Button>
                        <Link to="/login"><Button color="contrast">登录</Button></Link>
                    </Toolbar>
                    <Sidelist open={this.props.page.side} actions={this.props.actions}/>
                </AppBar>
            </div>

        )
    }

    toggleDrawer (side, open){
        this.props.actions.updateDrawerShow(side, open)

    };
    componentDidMount(){
        this.props.actions.updateDrawerShow('left', false)
    }
    componentWillMount(){

    }
    back(){

    }
}

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return {
        actions:bindActionCreators(actions, dispatch)
    }
}
Head.propTypes = {
    classes: PropTypes.object.isRequired,
};
Head = withStyles(styles)(Head);
Head = connect(mapStateToProps, mapDispatchToProps)(Head)

module.exports = Head;