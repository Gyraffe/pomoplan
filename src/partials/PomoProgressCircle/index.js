import React from 'react'
import PropTypes from 'prop-types'

const PomoProgressCircle = ({done, outOf, radius, border}) => {
    return (
        <svg width={2 * (radius + border)} height={2 * (radius + border)}>
            <g>
                <circle strokeDashoffset={calculateFill(done, outOf, calculateFullCircle(radius))} strokeWidth={3}
                        strokeDasharray={calculateFullCircle(radius)} cx={radius + border} cy={radius + border}
                        r={radius} stroke={"#2D9CDB"} strokeLinecap={"round"} fill={"none"}/>
                <text textAnchor={"middle"} x={"50%"} fill={"#2D9CDB"} y={"50%"} strokeWidth={1} stroke={"#2D9CDB"}
                      dy=".3em" fontSize={(radius + border) * 0.8}>{done + '|' + outOf}</text>
            </g>
        </svg>
    )
}

PomoProgressCircle.propTypes = {
    done: PropTypes.number.isRequired,
    outOf: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    border: PropTypes.number.isRequired
}

export default PomoProgressCircle

function calculateFill(done, outOf, fullCircle) {
    const percentageDone = done / outOf
    return (1 - percentageDone) * fullCircle
}

function calculateFullCircle(radius) {
    return radius * 2 * 3.14
}