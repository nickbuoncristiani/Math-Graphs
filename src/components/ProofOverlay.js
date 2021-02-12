import React from 'react'

function ProofOverlay({proofOutline, close}) {
    return (
        <div className="proof">
            <p>{proofOutline[0]}</p> 
            <input type="submit"></input>
            <button className="close-btn" onClick={close}><i className="fas fa-times"></i></button>
        </div>
    )
}

export default ProofOverlay;