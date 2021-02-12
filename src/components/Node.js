import React from 'react'

function Node ({theorem, status, r, x, y, add, remove}) {
    return (
        <g className={`node ${status}`} onMouseDown={add} onMouseUp={remove} transform={`translate(${x},${y})`}>
            <circle thm={theorem} r={r}/>
            <text y={parseInt(r)+10} dominantBaseline="middle" textAnchor="middle">
                {theorem}
            </text> 
        </g>
    )
}

export default Node;