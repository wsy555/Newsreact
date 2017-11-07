import React from 'react'


import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import ImgList from './subpage/ImgList'
import Carousel from '../../components/Carousel'

const styles = theme => ({
    root: {
        flexGrow: 1,
        background: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        height: "100%",
    },
    subheader: {
        width: '100%',
    },
});

class Home extends React.Component{
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                    <Carousel/>
                    <ImgList />
            </div>
        )
    }
}
Home.propTypes = {
    classes: PropTypes.object.isRequired,
};
module.exports = withStyles(styles)(Home);