import React, { useEffect, useState } from 'react'
import './login.css'
import LogoAndText from '../../components/logoAndText'
import Input from '../../components/input'
import Button from '../../components/button'
import IconError from '../../components/iconError'
import GoogleLogo from '../../assets/images/google_logo.png'
import FacebookLogo from '../../assets/images/facebook_logo.png'
import AppleLogo from '../../assets/images/apple_logo.png'
import { Navigate, redirect, useNavigate } from 'react-router-dom'

export const Login = () => {
  useEffect(() => {
    document.title = 'Đăng nhập - Spotify';
  }, []);

  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState(false);
  const navigate = useNavigate();


  const onRemenberClicked = () => {
    const wrapperSwitch = document.querySelector('.remember-switch');
    if (remember) {
      wrapperSwitch.classList.remove('turn-on');
    }
    else {
      wrapperSwitch.classList.add('turn-on');
    }
    setRemember(!remember);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const buttonLoginClicked = async (event) => {
    event.preventDefault();

    if (inputError) {
      return;
    }

    const response = await fetch('http://localhost:8080/v1/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();
    if (response.ok) {
      // process Token

      // redirect
      navigate('/');
    } else {
      const errorMessage = document.querySelector('.error-message');
      const containerError = document.querySelector('.container-error');

      errorMessage.textContent = data.message;
      containerError.style.display = 'flex';
    }
  }

  const handleInputError = (error) => {
    setInputError(error);
  }

  return (
    <div className="wrapper bg-black-secondary w-screen min-h-screen flex flex-col overflow-x-hidden overflow-y-auto">
      <div className="wrapper--header w-full h-[96px] flex items-center pl-7">
        <LogoAndText />
      </div>

      <div className="wrapper--body flex flex-col items-center bg-gradient-to-b from-[#2a2a2a] to-[#000000]">
        <div className="w-[734px] px-7 flex flex-col items-center bg-black-secondary my-10 py-10 rounded-xl">
          <h1 className="text-white-primary text-[32px] sm:text-[32px] font-bold my-12">
            Đăng nhập vào Spotify
          </h1>

          <div className='w-[324px]'>
            <div className='mb-3'>
              <a className='w-full h-[48px] rounded-[60px] border-gray-dark hover:border-white-primary hover:border-[1.9px] border-[1.5px] px-6 flex flex-row items-center justify-between' href="#">
                <img src={GoogleLogo} alt="" />
                <span className='font-bold text-[15px]'>Tiếp tục bằng Google</span>
                <div className='w-5'></div>
              </a>
            </div>
            <div className='mb-3'>
              <a className='w-full h-[48px] rounded-[60px] border-gray-dark hover:border-white-primary hover:border-[1.9px] border-[1.5px] px-6 flex flex-row items-center justify-between' href="#">
                <img src={FacebookLogo} alt="" />
                <span className='font-bold text-[15px]'>Tiếp tục bằng Facebook</span>
                <div className='w-5'></div>
              </a>
            </div>
            <div className='mb-3'>
              <a className='w-full h-[48px] rounded-[60px] border-gray-dark hover:border-white-primary hover:border-[1.9px] border-[1.5px] px-6 flex flex-row items-center justify-between' href="#">
                <img src={AppleLogo} alt="" />
                <span className='font-bold text-[15px]'>Tiếp tục bằng Apple</span>
                <div className='w-5'></div>
              </a>
            </div>
          </div>

          <div className='w-3/4 h-[1px] my-11 bg-gray-dark'></div>

          <div className='container-error w-full sm:w-[324px] hidden flex-row items-start bg-[#FFA42B] p-5 rounded-md mb-3'>
            <div className='min-h-[21px] min-w-[21px] mr-1'>
              <IconError strokeColor={'#171717'} width={'21px'} height={'21px'} />
            </div>
            <span className='error-message text-[#171717] text-[14px]'></span>
          </div>

          <form className="w-full sm:w-[324px]">
            <label className='block font-bold'>Email hoặc tên người dùng</label>
            <div className='mt-2'>
              <Input type={'email'} placeholder={'Email hoặc tên người dùng'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handleEmailChange} handleInputError={handleInputError} />
            </div>
            <label className='block font-bold mt-4'>Mật khẩu</label>
            <div className='my-2'>
              <Input type={'password'} placeholder={'Mật khẩu'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handlePasswordChange} />
            </div>
            <div className='flex flex-row items-center mt-5'>
              <div className='remember-switch cursor-pointer overflow-hidden w-10 h-[18px] rounded-xl' onClick={onRemenberClicked}>
              </div>
              <span className='text-[11px] ml-2'>Hãy nhớ tôi</span>
            </div>
            <div className='mt-10'>
              <Button width={'100%'} height={'48px'} radius={'60px'} backgroundColor={'bg-green-light'} label={'Đăng nhập'} fontColor={'text-black-primary'} fontSize={'15px'} fontStyle={'font-bold'} onClick={buttonLoginClicked} />
            </div>
          </form>

          <div className='w-3/4 flex flex-col items-center my-10'>
            <a className='underline font-bold hover:text-green-light text-[15px]' href="#">Quên mật khẩu của bạn?</a>
            <div className='h-[1px] w-full bg-gray-dark my-10'></div>
            <span className='block w-full text-gray-light text-[15px] text-center mt-11'>
              Bạn chưa có tài khoản?
              <a href="/register" className='ml-1 underline text-white-secondary hover:text-green-light font-bold'>Đăng ký Spotify.</a>
            </span>
          </div>
        </div>
      </div>

      <div className="wrapper--footer w-full h-24 flex items-center justify-center pl-7">
        <p className="footer--content text-center">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a>
          <span> and </span>
          <a href="https://policies.google.com/terms" className="underline"> Terms of Service</a>
          <span> apply.</span>
        </p>
      </div>
    </div>
  )
}
