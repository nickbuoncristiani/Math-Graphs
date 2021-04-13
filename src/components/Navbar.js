import React from 'react'
import CourseSelection from './CourseSelection';
import Learn from './Learn';
import ProfilePage from './ProfilePage';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handler = this.handler.bind(this);
    }

    handler = (component) => {
        this.props.setActivePage(component)
    };

    render() {
        return(
    
        <nav className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
              <i className="fas fa-meteor">math is good</i>
	            <ul className="navbar-nav ml-auto">
                    <li className="nav-item" onClick={() => this.handler(<Learn/>)}>
                      <a className="nav-link" href="#"><i className="fas fa-lightbulb"></i> <span>Learn</span></a>
                    </li>
                    <li className="nav-item" onClick={() => this.handler(<CourseSelection/>)}>
                      <a className="nav-link" href="#"><i className="fas fa-book"></i> <span>Courses</span></a>
                    </li>
                    <li className="nav-item" onClick={() => this.handler(<ProfilePage/>)}>
                      <a className="nav-link" href="#"><i className="fas fa-flask"></i> <span>Statistics</span></a>
                    </li>
                    <li className="nav-item" onClick={() => this.handler(<CourseSelection/>)}>
                      <a className="nav-link" href="#"><i className="fas fa-pencil-alt"></i> <span>Proof Guide</span></a>
                    </li>
                </ul>
            </div>  
        </nav>

        )
    }
}

/*
function Navbar(prop) {
    const inputTextHandler = (component) => {
        prop.setActivePage(component)
    };

    return (
        <nav className="navbar navbar-expand-md navbar-light sticky-top">
            <div className="container-fluid">
              <i className="fas fa-meteor">math is good</i>
	            <ul className="navbar-nav ml-auto">
                    <li className={`nav-item ${prop.activePage == "Learn"}`} onClick={() => inputTextHandler("Learn")}>
                      <a className="nav-link" href="#"><i className="fas fa-lightbulb"></i> <span>Learn</span></a>
                    </li>
                    <li className={`nav-item ${prop.activePage == "CourseSelection"}`} onClick={() => inputTextHandler("CourseSelection")}>
                      <a className="nav-link" href="#"><i className="fas fa-book"></i> <span>Courses</span></a>
                    </li>
                    <li className={`nav-item ${prop.activePage == "CourseSelection"}`} onClick={() => inputTextHandler("CourseSelection")}>
                      <a className="nav-link" href="#"><i className="fas fa-flask"></i> <span>Statistics</span></a>
                    </li>
                    <li className={`nav-item ${prop.activePage == "CourseSelection"}`} onClick={() => inputTextHandler("CourseSelection")}>
                      <a className="nav-link" href="#"><i className="fas fa-pencil-alt"></i> <span>Proof Guide</span></a>
                    </li>
                </ul>
            </div>
            
        </nav>
    );
}
*/

export default Navbar;