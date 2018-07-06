import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import Link from 'gatsby-link';
// import "../style/navBarStyle.css";
import {Nav, NavItem, Navbar} from "react-bootstrap";

import Resume from "./Resume";

class index extends Component {

    constructor(props) {
        super(props)
        this.state = {
            currentTab: "home"
        }
    }

    render() {
        return(
        <div>
            <Link to="/page-2/">Go to page 2</Link>
        </div>
        )
    }
}

export default index
