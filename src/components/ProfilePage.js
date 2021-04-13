import React from 'react'
import Achievement from './Achievement';

class ProfilePage extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="ProfilePage">
                <div className="col1">
                    <div className="header" style={{"display":"flex", "flex":1, "alignItems":"center"}}>
                        <img src="avatars/1.webp" width="20%"/>
                        <h1 style={{"flex":"1"}}>Username</h1>
                    </div>
                    <h3 style={{"flex":1}}>Achievements</h3>
                    <Achievement img="./imgs/comb.jfif" title="Combinatorics Mastery" description="Percent completion of combinatorics study." completion="37/100"></Achievement>
                    <Achievement img="imgs/analysis.jpg" title="Analysis Mastery" description="Percent completion of analysis study." completion="46/100"></Achievement>
                    <Achievement img="imgs/abstract.png" title="Algebra Mastery" description="Percent completion of algebra." completion="89/100"></Achievement>
                </div>
                <div className="col2">
                    <div className="ProfileCourses">
                        <h2>Courses</h2>
                        <hr/>
                        <div style={{"display":"flex"}}>
                            <img src="topology.png" alt=""/>
                            <div>
                                <h3>Topology</h3>
                                <p>Total xp: 700</p>
                            </div>
                        </div>
                    </div>
                    <div className="Friends">
                        <h2>Friends</h2>
                        <hr/>
                        <div style={{"display":"flex"}}>
                            <img src="3.png" alt=""/>
                            <div>
                                <h3>Friend1</h3>
                                <p>Total xp: 800</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfilePage;