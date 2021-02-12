import React from 'react'

function Overlay({overlay, infoText, proofOutline, close}) {
  
    if (overlay) return (
        <div className="overlay">
            {React.cloneElement(
                overlay,
                {
                    text: infoText,
                    proofOutline: proofOutline,
                    close: close
                }
            )}
        </div>
    );
    else return <></>
}

export default Overlay;