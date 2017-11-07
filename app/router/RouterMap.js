import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import PropTypes from 'prop-types'
var About = require('../containers/About');
var NewsList = require('../containers/News');
var Home = require('../containers/Home');
var App = require('../containers/App');
var User = require('../containers/User');
var Detail = require('../containers/Detail');
var Login = require('../containers/Login');

class RouterMap extends React.Component{
    updateHandle(){
        console.log('路由变化我就执行');
    }
    render(){
        return (
            <Router history={this.props.history} onUpdate={this.updateHandle()}>

                    <App>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route  path="/about" component={About}/>
                            <Route  path="/news_list" component={NewsList}/>
                            <Route path="/user" component={User}/>
                            <Route path="/detail/:id" component={Detail}/>
                            <Route path="/login/:route?" component={Login}/>
                        </Switch>
                    </App>
            </Router>
        )
    }
}
module.exports = RouterMap;