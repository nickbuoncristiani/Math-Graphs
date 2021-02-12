import React from 'react'

function SuccessOverlay({success, close}) {
    return (
        <div className="verdict">
            <p>{success ? "Success!" : "Try Again."}</p>
            <button className="close-btn" onClick={close}><i className="fas fa-times"></i></button>
        </div>
    )
}

export default SuccessOverlay;

