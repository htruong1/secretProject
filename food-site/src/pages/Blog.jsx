import React, {Component} from "react";
import Link from 'gatsby-link'

class About extends Component {
    render() {
        return(
            <div>
                <h1> Blog </h1>
                <Link to="/page-2/">Go to page 2</Link>
            </div>
            )
    }
}

export default About;