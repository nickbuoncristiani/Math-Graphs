import React from 'react'

function InfoOverlay({text, close}) {
    return (
        <div className="theorem-info">
            <p>{text}</p>
            <button className="close-btn" onClick={close}><i className="fas fa-times"></i></button>
        </div>
    )
}

export default InfoOverlay;