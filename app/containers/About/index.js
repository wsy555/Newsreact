import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';


const styles = theme => ({
    content: theme.mixins.gutters({
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: theme.spacing.unit * 3,
    }),
    primary: {
        color: theme.palette.primary[500],
    },
});

class About extends React.Component{
    constructor(props, context){
        super(props, context)
    }
    render() {
        const {classes} = this.props;
        return (

            <div>
                <Paper className={classes.content} elevation={4}>
                    <Typography type="headline" component="h3">
                        This is a sheet of paper.
                    </Typography>
                    <Typography type="body1" component="p">
                        Paper can be used to build surface or other elements for your application.
                    </Typography>
                </Paper>
            </div>

        )
    }
    componentDidMount(){
        console.log('About context is :',this.context)
    }
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};
module.exports = withStyles(styles)(About);