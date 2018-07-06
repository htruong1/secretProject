import {Nav, NavItem, Navbar} from "react-bootstrap";
import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import "../style/navBarStyle.css";

class NavBarHeader extends Component {

    render() {
        return(
            <div className="navBarStyle">
                <Navbar>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                            Home
                        </NavItem>
                        <NavItem eventKey={2} href="About">
                            About
                        </NavItem>
                        <NavItem eventKey={3} href="Blog">
                            Blog
                        </NavItem>
                        <NavItem eventKey={4} href="Resume">
                            Resume
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default NavBarHeader;