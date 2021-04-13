import React from 'react'

class Achievement extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
            <hr style={{"width":"100%", "flex":1}}/>
            <div className="Achievement">
                
                <img src={this.props.img} width={"20%"} height={"100%"}/>
                <div style={{"display":"flex", "flexDirection":"column", "justifyContent":"space-around", "width":"70%"}}>
                    <h3 style={{"flex":2}}>
                        {this.props.title}
                    </h3>
                    <p style={{"flex":1}}>{this.props.description}</p>
                    <hr style={{"flex":1, "width":"100%"}}/>
                </div>
            </div>
            </>
        )
    }
}

export default Achievement;