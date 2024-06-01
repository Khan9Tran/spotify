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
        transform: `scale(${isHovered && scaleWhenHoverd ? 1.05 : 1})`,
        transition: 'scale 0.1s linear',
    }

    const fontSizeStyle = {
        fontSize: fontSize !== undefined ? fontSize : '14px',
    }

    return (
        <button
            className={`${backgroundColor !== undefined ? backgroundColor : 'bg-gray-light'} flex justify-center items-center`}
            onClick={onClick}
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <span className={`${fontColor !== undefined ? fontColor : ''} ${fontStyle !== undefined ? fontStyle : ''}`} style={fontSizeStyle}>
                {label !== undefined ? label : 'Button'}
            </span>
        </button>
    );
};

export default Button;
