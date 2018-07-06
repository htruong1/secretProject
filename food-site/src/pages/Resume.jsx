import React, {Component} from "react";
import "../style/resume.css";
import SomePhoto_of_me from "../style/SomePhoto_of_me.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap-theme.min.css";
import {ProgressBar, Button, Image, ButtonToolbar} from "react-bootstrap";

class Resume extends Component { 

    constructor(props) {
        super(props)
    }

    displayResumeHeader = () => {
        return (
            <div className="resumeHeader">
                <div className="headContainer">
                    <div className="horizonRow">
                        <Image src={SomePhoto_of_me} circle/>
                        <div className="contactContainer">
                            <h1 className="header"> Henry Truong </h1>
                            <h4 className="jobTitle"> Software Developer and Front-end Specialist </h4>
                            <h4 className="jobTitle"> Contact Info </h4>
                        </div>
                    </div>
                    <div className="buttonMargins">
                        <ButtonToolbar>
                            <Button bsStyle="primary"
                                onClick={() => window.
                                open("https://www.linkedin.com/in/henry-truong-52136714a/", "_blank")}> 
                                Linkedin 
                            </Button>
                            <Button bsStyle="primary"
                            onClick={() => window.
                                open("https://github.com/htruong1", "_blank")} > GitHub </Button>
                        </ButtonToolbar>
                    </div>
                </div>
            </div>
        )
    }

    displaySkillsComponent = () => {
        return (
            <div className="skillsContainer">
                <h3 className="header"> Skills </h3>
                <div className="horizonRow">
                    <div className="skillsSubContainer"> 
                        <h4 className="skillsSubHeader"> Developer Skills </h4>
                        <div>
                            JavaScript
                            <ProgressBar now={90} label={"90%"}/>
                        </div>
                        <div>
                            Python
                            <ProgressBar now={85} label={"85%"}/>
                        </div>
                        <div>
                            React.js
                            <ProgressBar now={80} label={"80%"}/>
                        </div>
                        <div>
                            HTML and CSS
                            <ProgressBar now={80} label={"80%"}/>
                        </div>
                        <div>
                            C and MATLAB
                            <ProgressBar now={65} label={"65%"}/>
                        </div>
                    </div>
                    <div className="skillsSubContainer"> 
                        <h4 className="skillsSubHeader"> Knowledge In </h4>
                        <div>
                            Git
                            <ProgressBar now={80} label={"80%"}/>
                        </div>
                        <div>
                            Agile Methodoligies
                            <ProgressBar now={80} label={"80%"}/>
                        </div>
                        <div>
                            Unit Testing and Test Driven Development
                            <ProgressBar now={75} label={"75%"}/>
                        </div>
                        <div>
                            SQL and Databases
                            <ProgressBar now={75} label={"75%"}/>
                        </div>
                        <div>
                            Dank Memes
                            <ProgressBar now={100} label={"420%"}
                                active striped bsStyle="success" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return(
            <div className="resumeContainer">
                {this.displayResumeHeader()}
                <div className="aboutContainer">
                    <h3 className="header"> About Me </h3>
                    <div className="aboutDescription">
                        Hi. I'm a Computing Science student specialising in software practice and a food addict.
                        From my time as an intern at Intuit, I've gained an appreciation and understanding of 
                        software developmet progress and strive to perfect my craft. This motivated me to build this blog
                        to constantly improve my skills. I'm experienced in front-end evelopment, agile methodologies,
                        ReactJS Javascript, and more!
                    </div>
                </div>
                {this.displaySkillsComponent()}
                <div className="horizonRow">
                    <div className="skillsContainer">
                        <div className="historyContainer"/>
                        <div className="historyContainer"/>
                    </div>
                </div>
            </div>

        )
    }
}

export default Resume;