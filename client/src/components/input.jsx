import React, { useState } from 'react';

const Input = ({ type, placeholder, width, height, backgroundColor, radius, border, borderWidth, borderColor, borderColorForcused, borderColorError, changeBorderColor, padding, fontSize}) => {
  const [isForcused, setIsForcused] = useState(false);

  const styles = {
    width: width !== undefined ? width : 'auto',
    height: height !== undefined ? height : 'auto',
    borderWidth: borderWidth !== undefined ? borderWidth : '1px',
    borderRadius: radius !== undefined ? radius : '10px',
    padding: padding !== undefined ? padding : '0',
    fontSize: fontSize !== undefined ? fontSize : '14px',
  }

  return (
    <div>
      <input
        className={`outline-none ${border} ${isForcused ? borderColorForcused : borderColor} ${backgroundColor !== undefined ? backgroundColor : 'bg-transparent'}`}
        type={type !== undefined ? type : "text"}
        placeholder={placeholder !== undefined ? placeholder : ""}
        style={styles}
        onFocus={() => {
          if (changeBorderColor) {
            setIsForcused(true)
          }
        }}
        onBlur={() => {
          if (changeBorderColor) {
            setIsForcused(false)
          }
          }
        }
      />
    </div>
  )
}

export default Input;
