import { Component } from 'react'

export default class Features extends Component {

    render() {
        return (<div className="features-container">
            <div className="features-image-div"><img className="features-image" alt=""></img></div>
            <div className="features-div">
                <h3>Collect your content</h3>
                <h4>Your favorite content lives across different places of the web like blogs, tweets, vidoes, posts, and podcasts.</h4>
                <h4>Instead of bookmarking for future reference -you can use our google chrome extension to drag n drop your content to store on your dashboard.</h4>
            </div>
        </div>);
    }
}