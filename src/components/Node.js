import React from 'react'

function Node ({theorem, status, r, x, y, add, remove}) {
    return (
        <g className={`node ${status}`} onMouseDown={add} onMouseUp={remove} transform={`translate(${x},${y})`}>
            <g className="circles">
                <circle className="outer" r={r+12}></circle>
                <circle className="inner" thm={theorem} r={r}/>
            </g>
            <text y={parseInt(r)+25} dominantBaseline="middle" textAnchor="middle">
                {theorem}
            </text> 
        </g>
    )
}

export default Node;