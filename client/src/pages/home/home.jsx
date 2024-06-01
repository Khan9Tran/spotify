import React, { useEffect, useState } from 'react'
import './home.css'
import LogoAndText from '../../components/logoAndText'
import IconNext from '../../components/iconNext'
import IconPrevious from '../../components/iconPrevious'
import Button from '../../components/button'
import HomeIcon from '../../assets/images/home_icon.png'
import SearchIcon from '../../assets/images/search_icon.png'
import Cookies from 'js-cookie';

import { useNavigate } from 'react-router-dom'

export const Home = () => {

  const navigate = useNavigate();
  const [logined, setLogined] = useState(false);
  const token = Cookies.get('authToken');

  useEffect(() => {
    if (token) {
      setLogined(true);
      console.log('Chicken');
      console.log(token);
    }
  }, [token]);

  const logoHandleClick = () => {
    navigate('/');
  }

  const itemMenuHomeClicked = () => {

  }

  const itemMenuSearchClicked = () => {

  }

  const buttonLoginClicked = () => {
    navigate('/login');
  }

  const buttonRegisterClicked = () => {
    navigate('/register');
  }


  return (
    <div className='wrapper w-screen min-h-screen bg-black-primary overflow-y-auto flex flex-row'>
      <div className="wrapper__navigate w-[360px] h-ful flex flex-col sm:w-[420px] m-3">
        <div className="wrapper__navigate-menu w-full bg-black-secondary rounded-md p-5">
          <div className="w-fit h-[40px] cursor-pointer" onClick={logoHandleClick}>
            <LogoAndText />
          </div>
          <div className="flex flex-row items-center w-ful cursor-pointer" onClick={itemMenuHomeClicked}>
            <img className='w-[25px] h-[25px] ml-[3px]' src={HomeIcon} alt="" />
            <span className='font-bold text-[15px] text-white-primary m-3 mt-4 hover:text-white-primary'>Trang chủ</span>
          </div>
          <div className="flex flex-row items-center w-ful h-[50px] cursor-pointer" onClick={itemMenuSearchClicked}>
            <img className='w-[25px] h-[25px] ml-[3px]' src={SearchIcon} alt="" />
            <span className='font-bold text-[15px] text-gray-light m-3 mt-4 hover:text-white-primary'>Tìm kiếm</span>
          </div>
        </div>
        <div className="wrapper__navigate-library w-ful flex-grow bg-black-secondary mt-3 rounded-md p-5">

        </div>
      </div>

      <div className="wrapper__main flex-grow h-ful flex flex-col my-3 mr-3 rounded-md bg-black-secondary">
        <div className="wrapper__main-header h-[64px] flex flex-row">
          <div className="main-navigate flex flex-row items-center px-7">
            <div className='w-[30px] h-[30px] rounded-[50%] bg-black-primary mr-2 cursor-pointer flex justify-center items-center'>
              <IconPrevious width={'20px'} height={'23px'} fill={'#ffffff'} />
            </div>
            <div className='w-[30px] h-[30px] rounded-[50%] bg-black-primary cursor-pointer flex justify-center items-center'>
              <IconNext width={'20px'} height={'23px'} fill={'#aaaaaa'} />
            </div>
          </div>
          <div className="main-accout flex flex-row justify-end items-center flex-grow pr-5">
            <Button width={'120px'} height={'48px'} label={'Đăng ký'} radius={'70px'} fontStyle={'font-bold'} fontSize={'15px'} scaleWhenHoverd={true} backgroundColor={'transparent'} onClick={buttonRegisterClicked} />
            <Button width={'144px'} height={'48px'} label={'Đăng nhập'} radius={'70px'} fontStyle={'font-bold'} fontSize={'15px'} scaleWhenHoverd={true} backgroundColor={'bg-white-secondary'} fontColor={'text-black-primary'} onClick={buttonLoginClicked} />
          </div>
        </div>
        <div className="wrapper__main-body">

        </div>
        <div className="wrapper__main-footer">

        </div>
      </div>
    </div>
  )
}
