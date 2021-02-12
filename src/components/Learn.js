import React from 'react'
import Node from './Node.js'
import Overlay from './Overlay.js'
import InfoOverlay from './InfoOverlay.js'
import ProofOverlay from './ProofOverlay.js'

const NODE_SIZE = 40;
const ARROW_SIZE = 11;

class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.courseData=require('../json/rudin.json');
        this.dependencies = this.courseData[0];
        this.descriptions = this.courseData[1];
        this.proofs = this.courseData[2];

        //temporary. should find nicer way to initialize positions
        let locationsInit={}; 
        for (var i=0;i<Object.keys(this.dependencies).length;i++) {
            locationsInit[Object.keys(this.dependencies)[i]]=[75*i+100, 75*i+100];
        }

        this.state = {
            overlay: null,

            infoText: "",
            proofOutline: "",

            locations: locationsInit
        }

        this.region = React.createRef();

        this.offsetX=0;
        this.offsetY=0;
        this.el="";

        this.move = this.move.bind(this);
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    /*Event handlers*/
    move=e=>
    {
        if (this.el) {
            let locationsNew={...this.state.locations};
            locationsNew[this.el] = [e.clientX-this.offsetX, e.clientY-this.offsetY];
            this.setState({locations: locationsNew});
        }
    }

    add=(e, theorem)=>
    {
        if (e.ctrlKey) {
            this.setState({overlay:<InfoOverlay/>, infoText:this.descriptions[theorem]});
        }
        else if (e.altKey) {
            if (this.proofs[theorem])
                this.setState({overlay:<ProofOverlay/>, proofOutline:this.proofs[theorem]});
        }
        else {
            this.offsetX = this.region.current.getBoundingClientRect().left;
            this.offsetY = this.region.current.getBoundingClientRect().top;
            this.el=theorem;
        }
    }

    remove=()=>
    {
        this.el="";
    }

    render() {
        return (
        
        <section>
            <div className="graph-container" onMouseUp={this.remove} onMouseMove={this.move} ref={this.region}>
                <svg className="area" width="100%" height="650px">
                    <defs>
                        <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                            <polygon points="0 0, 10 3.5, 0 7" />
                        </marker>
                    </defs>
                    {Object.keys(this.dependencies).map(thm => 
                        <>
                        {
                        this.dependencies[thm].map((dep, i) => {
                            let x1 = this.state.locations[thm][0];
                            let y1 = this.state.locations[thm][1];
                            let x2 = this.state.locations[dep][0];
                            let y2 = this.state.locations[dep][1];
                            let angle = Math.atan((y2-y1)/(x2-x1));
                            let sign = x2>x1 ? -1 : 1;
                            
                            return <line key={i} start={thm} end={dep} markerEnd="url(#arrowhead)" x1={x1} y1={y1} x2={x2+sign*Math.cos(angle)*(NODE_SIZE+ARROW_SIZE)} y2={y2+sign*Math.sin(angle)*(NODE_SIZE+ARROW_SIZE)} />
                        }
                        )}
                        </>
                    )}
                    {Object.keys(this.dependencies).map((thm, i) =>  
                        <Node theorem={thm} key={i} r={NODE_SIZE} status={this.proofs[thm]==="" ? "given" : "incomplete"} x={this.state.locations[thm][0]} y={this.state.locations[thm][1]} add={(e)=>this.add(e, thm)}/>
                    )}
                </svg>
            </div>
            <Overlay overlay={this.state.overlay} infoText={this.state.infoText} proofOutline={this.state.proofOutline} close={()=>{this.setState({overlay: null})}}/>
        </section>

        )
    }
}

export default Learn;