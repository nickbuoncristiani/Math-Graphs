import React from 'react'

class Course extends React.Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
        <div className={`card align-items-center py-5 ${this.props.title == this.props.active ? "active" : ""}`} onClick={this.props.onClick}>
                <img className="card-img-top" src={this.props.image} alt=""></img>
                <div className="card-body text-center">
                    <h4 className="card-title font-weight-bolder">{this.props.title}</h4>
                    <p className="card-text font-weight-lighter">Number of nodes: <strong>{this.props.nodes}</strong></p>
                </div>
        </div> )
    }
}

export default Course;