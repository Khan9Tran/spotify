import React, { useState } from 'react';

const Button = ({ onClick, label, backgroundColor, width, height, margin, padding, radius, scaleWhenHoverd, fontSize, fontColor, fontStyle }) => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        cursor: 'pointer',
        width: width !== undefined ? width : 'auto',
        height: height !== undefined ? height : 'auto',
        margin: margin !== undefined ? margin : '0',
        padding: padding !== undefined ? padding : '0',
        borderRadius: radius !== undefined ? radius : '10px',
        fontSize: fontSize !== undefined ? fontSize : '14px',
        transform: `scale(${isHovered && scaleWhenHoverd ? 1.1 : 1})`,
        transition: 'scale 0.1s linear',
    }
    return (
        <button
            className={`${backgroundColor !== undefined ? backgroundColor : 'bg-gray-light'} ${fontColor !== undefined ? fontColor : ''} ${fontStyle !== undefined ? fontStyle : ''}`}
            onClick={onClick}
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {label !== undefined ? label : 'Button'}
        </button>
    );
};

export default Button;
