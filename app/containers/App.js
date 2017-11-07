import React  from 'react';
const Head = require('../components/Head');
const Footer = require('../components/Footer');



class App extends React.Component{

    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <Head/>
                <div>{this.props.children}</div>
                <Footer/>
            </div>
        )
    }

    componentDidMount(){
        console.log('App props is :',this.props)
    }

}

module.exports = App;