import React from 'react'
import ReactSwipe from 'react-swipe';

class Carousel extends React.Component{
    constructor(props, context){
        super(props, context);
        this.state = {
            index:0
        }
    }
    render() {
        var opt={
            auto:3000,
            callback:function (index) {
                this.setState({
                    index:index
                })
            }.bind(this)

        }
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opt}>
                    <div>
                        <ul>
                            <li>KTV</li>
                            <li>KTV</li>
                            <li>KTV</li>
                            <li>KTV</li>
                            <li>KTV</li>
                            <li>KTV</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li>儿歌</li>
                            <li>儿歌</li>
                            <li>儿歌</li>
                            <li>儿歌</li>
                            <li>儿歌</li>
                            <li>儿歌</li>
                        </ul>

                    </div>
                    <div>

                        <ul>
                            <li>诗词</li>
                            <li>诗词</li>
                            <li>诗词</li>
                            <li>诗词</li>
                            <li>诗词</li>
                            <li>诗词</li>
                        </ul>

                    </div>
                </ReactSwipe>
            </div>

        )

    }
    componentDidMount(){
    }
}

module.exports = Carousel;