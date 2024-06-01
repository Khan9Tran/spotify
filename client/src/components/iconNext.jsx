import React from 'react'

const IconNext = ({ width, height, fill }) => {
    return (
        <div>
            <svg fill={fill !== undefined ? fill : '#000000'} height={height !== undefined ? height : '25px'} width={width !== undefined ? width : '25px'} version="1.1" viewBox="0 0 24 24">
                <g>
                    <g>
                        <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default IconNext;
