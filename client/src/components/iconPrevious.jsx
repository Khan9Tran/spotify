import React from 'react'

const IconPrevious = ({ width, height, fill }) => {
    return (
        <div>
            <svg fill={fill !== undefined ? fill : '#000000'} height={height !== undefined ? height : '25px'} width={width !== undefined ? width : '25px'} version="1.1" viewBox="0 0 24 24">
                <g>
                    <g>
                        <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 		" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default IconPrevious;