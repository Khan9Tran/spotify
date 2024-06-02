import React, { useState } from 'react';
import PasswordShow from '../assets/images/password_show.png'
import PasswordHidden from '../assets/images/password_hidden.png'
import IconError from './iconError'


const Input = ({ type, placeholder, width, height, backgroundColor, radius, border, borderWidth, borderColor, borderColorForcused, borderColorError, changeBorderColor, padding, fontSize, onChange, handleInputError }) => {

  const [isForcused, setIsForcused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputError, setInputError] = useState(false);

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

  const handleChange = onChange !== undefined ? onChange : () => { };

  return (
    <div className='relative'>
      <input
        className={`outline-none ${border} ${inputError ? borderColorError : isForcused ? borderColorForcused : borderColor} ${backgroundColor !== undefined ? backgroundColor : 'bg-transparent'}`}
        type={showPassword ? 'text' : type !== undefined ? type : 'text'} placeholder={placeholder !== undefined ? placeholder : ""}
        style={styles}
        onFocus={() => {
          if (changeBorderColor) {
            setIsForcused(true)
          }
        }}
        onBlur={(event) => {
          if (changeBorderColor) {
            setIsForcused(false)
          }

          if (type === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (event.target.value !== '' && !emailRegex.test(event.target.value)) {
              setInputError(true);
              handleInputError(true);
            } else {
              setInputError(false);
              handleInputError(false);
            }
          }
          if (type === 'notEmpty') {
            if (event.target.value === '') {
              setInputError(true);
              handleInputError(true);
            } else {
              setInputError(false);
              handleInputError(false);
            }
          }
          handleChange(event)
        }}
      />
      {type === 'password' && (
        <div className='absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer' onClick={handleShowPassword}>
          {showPassword ? <img src={PasswordShow} alt="Hide password" /> : <img src={PasswordHidden} alt="Show password" />}
        </div>
      )}
      <div className={`flex flex-row items-start mt-2 ${inputError && (type === 'email' || type === 'notEmpty')? 'block' : 'hidden'}`}>
        <div className='min-h-[20px] min-w-[20px]'>
          <IconError strokeColor={'#FF0000'} width={'17px'} height={'17px'} />
        </div>
        <div className={`text-red-dark text-[13px]`}>
          {type === 'email' ? 'Email này không hợp lệ. Hãy đảm bảo rằng email được nhập dưới dạng example@email.com' : 'Đây là trường bắt buộc'}
        </div>
      </div>



    </div>
  )
}

export default Input;