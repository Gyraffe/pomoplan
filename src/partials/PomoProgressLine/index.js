import React from 'react'
import PropTypes from 'prop-types'

const PomoProgressLine = ({done, outOf}) => {
    return (
        <svg height="20" width="8rem">
            <g>
                <line x1={"10%"}
                      y1={"50%"}
                      x2={"90%"}
                      y2={"50%"}
                      fill={"none"}
                      strokeWidth={"20"}
                      strokeLinecap={"round"}
                      stroke={"#E0E0E0"}/>
                <line
                    x1={"10%"}
                    y1={"50%"}
                    x2={CalculateProgress(done, outOf)}
                    y2={"50%"}
                    stroke="#2D9CDB"
                    strokeWidth="18"
                    fill={"none"}
                    strokeLinecap={"round"}/>
            <text x="50%" y="50%" dy=".3em" textAnchor={"middle"}  fill={"#F2F2F2"} strokeWidth={0.5} stroke={"#F2F2F2"}>
                {done + " | " + outOf}
                </text>
            </g>
        </svg>
    )
}

PomoProgressLine.propTypes = {
    done: PropTypes.number,
    outOf: PropTypes.number
}

export default PomoProgressLine

/**
 * @return {string}
 */
function CalculateProgress(done, outOf) {
    return ((done / outOf) * 80 + 10) + "%"
}