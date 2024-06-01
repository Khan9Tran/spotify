import React, { useEffect, useState } from 'react'
import './register.css'
import LogoAndText from '../../components/logoAndText'
import Input from '../../components/input'
import Button from '../../components/button'
import IconError from '../../components/iconError'
import IconSuccess from '../../components/iconSuccess'
import GoogleLogo from '../../assets/images/google_logo.png'
import FacebookLogo from '../../assets/images/facebook_logo.png'
import AppleLogo from '../../assets/images/apple_logo.png'

export const Register = () => {
  useEffect(() => {
    document.title = 'Đăng ký - Spotify';
  }, []);

  const [inputError, setInputError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const handleInputError = (error) => {
    setInputError(error);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const buttonRegisterClicked = async (event) => {
    event.preventDefault();

    if (inputError) {
      return;
    }

    const response = await fetch('http://localhost:8080/v1/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirm_password: confirmPassword,
        name: name
      })
    });

    const data = await response.json();
    const errorMessage = document.querySelector('.notify-message');
    const containerNotify = document.querySelector('.container-notify');

    if (response.ok) {
      containerNotify.classList.remove('error');
      containerNotify.classList.add('success');

      errorMessage.innerHTML = 'Đăng ký thành công. Để tiếp tục, hãy <a class="underline font-bold" href="/login">đăng nhập.</a>';
      containerNotify.style.display = 'flex';
    } else {
      containerNotify.classList.remove('success');
      containerNotify.classList.add('error');

      if (data.message !== 'Email đã tồn tại') {
        errorMessage.textContent = data.message;
      }
      else {
        errorMessage.innerHTML = 'Địa chỉ email này đã được liên kết với một tài khoản hiện có. Để tiếp tục, hãy <a class="underline font-bold" href="/login">đăng nhập.</a>';
      }
      containerNotify.style.display = 'flex';
    }

  };

  return (
    <div className="wrapper bg-black-secondary w-screen min-h-screen flex flex-col overflow-y-auto">
      <div className="wrapper--header w-full h-[96px] flex items-center pl-7">
        <LogoAndText />
      </div>

      <div className="wrapper--body flex flex-col items-center">
        <div className="w-[388px] px-7">
          <h1 className="text-white-primary text-[32px] sm:text-[45px] font-bold mb-11">
            Đăng ký để bắt đầu nghe
          </h1>

          <div className='container-notify w-full sm:w-[339px] hidden flex-row items-start p-5 rounded-md'>
            <div className='icon-error min-h-[21px] min-w-[21px] mr-1'>
              <IconError strokeColor={'#171717'} width={'21px'} height={'21px'} />
            </div>
            <div className='icon-success min-h-[21px] min-w-[21px] mr-1'>
              <IconSuccess fill={'#171717'} width={'21px'} height={'21px'} />
            </div>
            <span className='notify-message text-[#171717] text-[14px]'></span>
          </div>

          <form className="mt-4">
            <label className='font-bold'>Địa chỉ email</label>
            <div className='mt-1 mb-2'>
              <Input type={'email'} placeholder={'name@domain.com'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handleEmailChange} handleInputError={handleInputError} />
            </div>

            <label className='font-bold'>Mật khẩu</label>
            <div className='mt-1 mb-2'>
              <Input type={'password'} placeholder={'Mật khẩu'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handlePasswordChange} />
            </div>

            <label className='font-bold'>Xác nhận mật khẩu</label>
            <div className='mt-1 mb-2'>
              <Input type={'password'} placeholder={'Mật khẩu'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handleConfirmPasswordChange} />
            </div>

            <label className='font-bold'>Tên</label>
            <div className='mt-1 mb-2'>
              <Input type={'text'} placeholder={'Tên của bạn'} width={'100%'} height={'48px'} radius={'5px'} padding={'0 10px'} fontSize={'15px'} borderWidth={'1.5px'} changeBorderColor={true} borderColor={'border-gray-dark'} borderColorForcused={'border-white-primary'} borderColorError={'border-red-light'} onChange={handleNameChange} />
            </div>

            <div className='mt-11'>
              <Button width={'100%'} height={'48px'} radius={'60px'} backgroundColor={'bg-green-light'} label={'Đăng ký'} fontColor={'text-black-primary'} fontSize={'15px'} fontStyle={'font-bold'} onClick={buttonRegisterClicked} />
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
            <span className='block w-full text-gray-light text-[15px] text-center mb-16'>
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
