import React, {useState} from 'react'
import Course from './Course'

class CourseSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "active": null
        };
        this.courses = require('../json/courses.json');
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = (course) => {
        this.setState({active : course});
        this.props.setCourse(course);
    }

    render() {
        return(
        
        <div className={`menu container-fluid pt-3 bg-light ${this.props.hidden ? "hidden" : ""}`}>
            <h1>Select a course...</h1>
            <div className="row justify-content-around">
                {
                this.courses.map((course) => (
                    <div className="col-3" key={course["title"]}>
                        <Course title={course["title"]} image={course["image"]} nodes={course["nodes"]} active={this.state["active"]} onClick={()=>{this.handleClick(course["title"])}}/>
                    </div>
                ))
                }
            </div>
        </div>

        )
    }
}

export default CourseSelection;