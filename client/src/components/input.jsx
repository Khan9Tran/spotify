import React, { useState } from 'react';
import PasswordShow from '../assets/images/password_show.png'
import PasswordHidden from '../assets/images/password_hidden.png'


const Input = ({ type, placeholder, width, height, backgroundColor, radius, border, borderWidth, borderColor, borderColorForcused, borderColorError, changeBorderColor, padding, fontSize }) => {

  const [isForcused, setIsForcused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const styles = {
    width: width !== undefined ? width : 'auto',
    height: height !== undefined ? height : 'auto',
    borderWidth: borderWidth !== undefined ? borderWidth : '1px',
    borderRadius: radius !== undefined ? radius : '10px',
    padding: padding !== undefined ? padding : '0',
    fontSize: fontSize !== undefined ? fontSize : '14px',
  }

  return (
    <div className='relative'>
      <input
        className={`outline-none ${border} ${isForcused ? borderColorForcused : borderColor} ${backgroundColor !== undefined ? backgroundColor : 'bg-transparent'}`}
        type={showPassword ? 'text' : type !== undefined ? type : 'text'} placeholder={placeholder !== undefined ? placeholder : ""}
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
        }}
      />
      {type === 'password' && (
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={handleShowPassword}>
          {showPassword ? <img src={PasswordShow} alt="Hide password" /> : <img src={PasswordHidden} alt="Show password" />}
        </div>
      )}
    </div>
  )
}

export default Input;