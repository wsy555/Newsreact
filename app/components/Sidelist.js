import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import Drawer from 'material-ui/Drawer';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import InboxIcon from 'material-ui-icons/Inbox';
import DraftsIcon from 'material-ui-icons/Drafts';

const styles = theme => ({
    list: {
        width: 250,
    },
    listFull: {
        width: 'auto',
    },
});

class Sidelist extends React.Component{
    constructor(props, context){
        super(props)
        this.state = {
            left: false
        };

    }

    render(){
        const { classes } = this.props;
        return (
            <Drawer open={this.props.open}>
                <div
                    tabIndex={0}
                    role="button"
                    className={classes.list}
                >
                    <List onClick={this.toggleDrawer.bind(this, 'left', false, '/')}>
                        <ListItem button>
                            <ListItemText primary="返回首页" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List onClick={this.toggleDrawer.bind(this, 'left', false, '/news_list')}>

                        <ListItem button>
                            <ListItemText primary="热门文章" />
                        </ListItem>
                    </List>
                    <Divider />
                    <List onClick={this.toggleDrawer.bind(this, 'left', false, '/about')}>
                        <ListItem button>
                            <ListItemText primary="关于我们" />
                        </ListItem>
                    </List>
                    <Divider />

                </div>
            </Drawer>
        )
    }
    toggleDrawer (side, open, url){
        this.props.actions.updateDrawerShow(side,open)
        this.context.router.history.push(url);
    };

    componentDidMount(){
        console.log('Sidelist props is :',this.props)
    }
}
Sidelist.contextTypes = {
    router: PropTypes.object.isRequired
};

module.exports = withStyles(styles)(Sidelist);