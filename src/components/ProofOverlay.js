import React from 'react'

class ProofOverlay extends React.Component {
    constructor(props) {
        super(props);
        this.outline = props.proofOutline;
        this.fillInTheBlank = React.createRef();
    }

    componentDidMount() {
        this.fillInTheBlank.current.innerHTML = this.props.proofOutline[0].replaceAll('_', '<input type="text" class="proofbox">');
        for (var i=0;i<this.fillInTheBlank.current.childNodes.length;i++) {
            this.fillInTheBlank.current.childNodes[i].addEventListener('input', this.typeHandle);
        }
        
    }

    typeHandle(e) {
        var test = document.createElement('span');
        test.textContent = e.target.value;
        e.target.parentElement.appendChild(test);
        e.target.style.width = (test.getBoundingClientRect().width + 10) + 'px';
        e.target.parentElement.removeChild(e.target.parentElement.childNodes[e.target.parentElement.childNodes.length - 1]);
    }

    render() {
        return (

        <div className="proof">
            <p ref={this.fillInTheBlank}></p>
            <input type="submit"></input>
            <button className="close-btn" onClick={this.props.close}><i className="fas fa-times"></i></button>
        </div>
        
        );
    }
}

export default ProofOverlay;