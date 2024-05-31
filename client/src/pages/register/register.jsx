import React, { useEffect } from 'react'
import './register.css'
import Logo from '../../components/logo'
import Input from '../../components/input'
import Button from '../../components/button'
import GoogleLogo from '../../assets/images/google_logo.png'
import FacebookLogo from '../../assets/images/facebook_logo.png'
import AppleLogo from '../../assets/images/apple_logo.png'

export const Register = () => {
  useEffect(() => {
    document.title = 'Đăng ký - Spotify';
  }, []);
  return (
    <div className="wrapper bg-black-secondary w-screen h-screen flex flex-col">
      <div className="wrapper--header w-full h-[96px] flex items-center pl-7">
        <Logo />
      </div>

      <div className="wrapper--body flex flex-col items-center">
        <div className="w-[388px] px-7">
          <h1 className="text-white-primary text-[32px] sm:text-[45px] font-bold">
            Đăng ký để bắt đầu nghe
          </h1>

          <form className="mt-9">
            <label className='font-bold'>Địa chỉ email</label>
            <div className='mt-3'>
              <Input type={'email'} placeholder={'name@domain.com'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} />
            </div>
            <div className='mt-11'>
              <Button width={'100%'} height={'48px'} radius={'60px'} backgroundColor={'bg-green-light'} label={'Tiếp theo'} fontColor={'text-black-primary'} fontSize={'15px'} fontStyle={'font-bold'} />
            </div>
          </form>

          <div className='w-full h-auto flex flex-row justify-between items-center my-9'>
            <div className='h-[1px] flex-grow bg-gray-dark'></div>
            <span className='mx-3'>hoặc</span>
            <div className='h-[1px] flex-grow bg-gray-dark'></div>
          </div>

          <div>
            <div className='mb-3'>
              <a className='w-full h-[48px] rounded-[60px] border-gray-dark hover:border-white-primary hover:border-[1.9px] border-[1.5px] px-6 flex flex-row items-center justify-between' href="#">
                <img src={GoogleLogo} alt="" />
                <span className='font-bold text-[15px]'>Đăng ký bằng Google</span>
                <div className='w-5'></div>
              </a>
            </div>
            <div className='mb-3'>
              <a className='w-full h-[48px] rounded-[60px] border-gray-dark hover:border-white-primary hover:border-[1.9px] border-[1.5px] px-6 flex flex-row items-center justify-between' href="#">
                <img src={FacebookLogo} alt="" />
                <span className='font-bold text-[15px]'>Đăng ký bằng Facebook</span>
                <div className='w-5'></div>
              </a>
            </div>
            <div className='mb-3'>
              <a className='w-full h-[48px] rounded-[60px] border-gray-dark hover:border-white-primary hover:border-[1.9px] border-[1.5px] px-6 flex flex-row items-center justify-between' href="#">
                <img src={AppleLogo} alt="" />
                <span className='font-bold text-[15px]'>Đăng ký bằng Apple</span>
                <div className='w-5'></div>
              </a>
            </div>
          </div>

          <div>
            <div className='h-[1px] w-full bg-gray-dark my-10'></div>
            <span className='block w-full text-gray-light text-[15px] text-center'>
              Bạn đã có tài khoản?
              <a href="/login" className='ml-1 underline text-white-secondary hover:text-green-light font-bold'>Đăng nhập tại đây.</a>
            </span>
          </div>

        </div>
      </div>

      <div className="wrapper--footer w-full h-24 flex items-center justify-center pl-7">
        <p className="footer--content text-center">
          This site is protected by reCAPTCHA and the Google
          <br />
          <a href="https://policies.google.com/privacy" className="underline">Privacy Policy</a>
          <span> and </span>
          <a href="https://policies.google.com/terms" className="underline"> Terms of Service</a>
          <span> apply.</span>
        </p>
      </div>
    </div>
  )
}
