import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie';

import './home.css'

import LogoAndText from '../../components/logoAndText'
import IconNext from '../../components/iconNext'
import IconPrevious from '../../components/iconPrevious'
import Button from '../../components/button'
import MainBodyGuest from '../../components/mainBodyGuest'
import Search from '../../components/searchComponent'

import HomeIcon from '../../assets/images/home_icon.png'
import SearchIcon from '../../assets/images/search_icon.png'
import LibraryIcon from '../../assets/images/library_icon.png'
import PlusIcon from '../../assets/images/plus_icon.png'
import AccoutAvatar from '../../assets/images/accout_avatar.png'
import ThanhHuy from '../../assets/images/thanh_huy.png'
import NhutKhang from '../../assets/images/nhut_khang.png'
import FacebookLogo from '../../assets/images/facebook_logo_no_color.png'
import EmailLogo from '../../assets/images/email_logo.png'

import { useNavigate } from 'react-router-dom'
import { LibraryComponent } from '../../components/libraryComponent';
import { GenreList } from '../../components/genreList';

export const Home = () => {

  const navigate = useNavigate();
  const [logined, setLogined] = useState(false);
  const token = Cookies.get('authToken');
  const [activeComponent, setActiveComponent] = useState('MainBodyGuest')
  const items = [
    {
        name: 'Genre 1',
        img: 'url_to_image_1',
        id: 1
    },
    {
        name: 'Genre 2',
        img: 'url_to_image_2',
        id: 2
    },
    {
        name: 'Genre 3',
        img: 'url_to_image_3',
        id: 3
    },
    {
        name: 'Genre 4',
        img: 'url_to_image_4',
        id: 4
    },
    {
      name: 'Genre 1',
      img: 'url_to_image_1',
      id: 1
  },
  {
      name: 'Genre 2',
      img: 'url_to_image_2',
      id: 2
  },
  {
      name: 'Genre 3',
      img: 'url_to_image_3',
      id: 3
  },
  {
      name: 'Genre 4',
      img: 'url_to_image_4',
      id: 4
  },
  {
    name: 'Genre 1',
    img: 'url_to_image_1',
    id: 1
},
{
    name: 'Genre 2',
    img: 'url_to_image_2',
    id: 2
},
{
    name: 'Genre 3',
    img: 'url_to_image_3',
    id: 3
},
{
    name: 'Genre 4',
    img: 'url_to_image_4',
    id: 4
}
,{
  name: 'Genre 1',
  img: 'url_to_image_1',
  id: 1
},
{
  name: 'Genre 2',
  img: 'url_to_image_2',
  id: 2
},
{
  name: 'Genre 3',
  img: 'url_to_image_3',
  id: 3
},
{
  name: 'Genre 4',
  img: 'url_to_image_4',
  id: 4
}
];
  const components = {
    MainBodyGuest: <MainBodyGuest />,
    GenreList: <GenreList items={items} />
  }
  

  useEffect(() => {
    const mainAccout = document.querySelector('.main-accout');
    if (token) {
      setLogined(true);
      mainAccout.classList.remove('no-login');
      mainAccout.classList.add('login');
    }
    else {
      setLogined(false);
      mainAccout.classList.add('no-login');
      mainAccout.classList.remove('login');
    }
  }, [token]);

  const logoHandleClick = () => {
    navigate('/');
  }

  const itemMenuHomeClicked = () => {
    setActiveComponent('MainBodyGuest');
  }

  const itemMenuSearchClicked = () => {
    setActiveComponent('GenreList');
  }

  const buttonLoginClicked = () => {
    navigate('/login');
  }

  const buttonRegisterClicked = () => {
    navigate('/register');
  }


  return (
    <div className='wrapper w-screen h-screen bg-black-primary flex flex-row'>
      <div className="wrapper__navigate min-w-[360px] h-ful flex flex-col xl:min-w-[420px] m-3">
        <div className="wrapper__navigate-menu w-full bg-black-secondary rounded-md p-5 overflow-hidden">
          <div className="w-fit h-[40px] cursor-pointer" onClick={logoHandleClick}>
            <LogoAndText />
          </div>
          <div className="flex flex-row items-center w-ful cursor-pointer" onClick={itemMenuHomeClicked}>
            <img className='w-[25px] h-[25px] ml-[3px]' src={HomeIcon} alt="" />
            <span className='font-bold text-[15px] text-white-primary m-3 mt-4 hover:text-white-primary transition'>Trang chủ</span>
          </div>
          <div className="flex flex-row items-center w-ful h-[50px] cursor-pointer" onClick={itemMenuSearchClicked}>
            <img className='w-[25px] h-[25px] ml-[3px]' src={SearchIcon} alt="" />
            <span className='font-bold text-[15px] text-gray-light m-3 mt-4 hover:text-white-primary transition'>Tìm kiếm</span>
          </div>
        </div>
        <div className="wrapper__navigate-library w-ful flex-grow bg-black-secondary mt-3 rounded-md overflow-hidden">
          <div className="px-5 py-1">
            <div className="flex flex-row items-center justify-between w-ful h-[50px]">
              <div className="flex flex-row items-center w-ful h-[50px] cursor-pointer" onClick={itemMenuSearchClicked}>
                <img className='w-[25px] h-[25px] ml-[3px]' src={LibraryIcon} alt="" />
                <span className='font-bold text-[15px] text-gray-light m-3 mt-4 flex-grow hover:text-white-primary transition'>Thư viện</span>
              </div>
              <img className='w-9 h-9 p-[6px] rounded-[50%] hover:bg-[#333333]' src={PlusIcon} alt="" />
            </div>
          </div>
          <div className="flex flex-row items-start justify-start w-full h-full">
              <LibraryComponent />
          </div>
        </div>
      </div>

      <div className="wrapper__main min-w-[520px] flex-grow h-ful flex flex-col my-3 mr-3 rounded-md bg-black-secondary">
        <div className="wrapper__main-header min-h-[64px] flex flex-row z-10 bg-black-secondary">
          <div className="main-navigate min-w-[120px] flex flex-row items-center px-7">
            <div className='w-[30px] h-[30px] rounded-[50%] bg-black-primary mr-2 cursor-pointer flex justify-center items-center'>
              <IconPrevious width={'20px'} height={'23px'} fill={'#ffffff'} />
            </div>
            <div className='w-[30px] h-[30px] rounded-[50%] bg-black-primary cursor-pointer flex justify-center items-center'>
              <IconNext width={'20px'} height={'23px'} fill={'#aaaaaa'} />
            </div>
          </div>
          <div className='wrapper__main-header justify-start py-2 px-5 translate-x-[-30px]'>
            {activeComponent === 'GenreList' ? <Search /> : null}
          </div>
          <div className="main-accout flex flex-row justify-end items-center flex-grow">
            <div className='accout-login-register hidden flex-row justify-center items-center py-2 px-5'>
              <Button width={'120px'} height={'48px'} label={'Đăng ký'} radius={'70px'} fontStyle={'font-bold'} fontSize={'15px'} scaleWhenHoverd={true} backgroundColor={'transparent'} onClick={buttonRegisterClicked} />
              <Button width={'144px'} height={'48px'} label={'Đăng nhập'} radius={'70px'} fontStyle={'font-bold'} fontSize={'15px'} scaleWhenHoverd={true} backgroundColor={'bg-white-secondary'} fontColor={'text-black-primary'} onClick={buttonLoginClicked} />
            </div>
            <div className='accout-options hidden flex-row justify-center items-center py-2 px-5'>
              <Button width={'180px'} height={'33px'} label={'Khám phá Premium'} radius={'70px'} fontStyle={'font-bold'} fontSize={'15px'} scaleWhenHoverd={true} backgroundColor={'bg-white-secondary'} fontColor={'text-black-primary'} onClick={buttonRegisterClicked} />
              <Button width={'180px'} height={'33px'} label={'Cài đặt Ứng dụng'} radius={'70px'} fontStyle={'font-bold'} fontSize={'15px'} scaleWhenHoverd={true} backgroundColor={'transparent'} fontColor={'text-white-secondary'} onClick={buttonLoginClicked} />
              <img className='accout-avatar w-10 h-10 p-1 rounded-[50%] bg-green-light hover:scale-105' src={AccoutAvatar} alt="" />
            </div>
          </div>
        </div>
        <div>
          <div className="wrapper__main-body flex-grow bg-gradient-to-b from-[#313131] to-black-secondary overflow-y-auto">

          {components[activeComponent]}

          </div>
          <div className="wrapper__main-footer ">
            <div className="footer-link">
              <div className="link-company">
                <span>Công ty</span>
                <a href="#" alt="">Giới thiệu</a>
                <a href="#" alt="">Việc làm</a>
                <a href="#" alt="">For the Record</a>
              </div>
              <div className="link-communicate">
                <span>Cộng đồng</span>
                <a href="#" alt="">Dành cho các Nghệ sĩ</a>
                <a href="#" alt="">Nhà phát triển</a>
                <a href="#" alt="">Quảng cáo</a>
                <a href="#" alt="">Nhà đầu tư</a>
                <a href="#" alt="">Nhà cung cấp</a>
              </div>
              <div className="link-useful">
                <span>Liên kết hữu ích</span>
                <a href="#" alt="">Hỗ trợ </a>
                <a href="#" alt="">Ứng dụng Di động Miễn phí </a>
              </div>
              <div className="link-package">
                <span>Các gói của Spootify</span>
                <a href="#" alt="">Premium Individual</a>
                <a href="#" alt="">Premium Student</a>
                <a href="#" alt="">Spotify Free</a>
              </div>
            </div>
            <div className="footer-social min-w-[160px]">
              <div className="owner">
                <img src={ThanhHuy} alt="" />
                <div className="owner-link">
                  <a href="https://www.facebook.com/profile.php?id=100024283741045" alt="">
                    <img src={FacebookLogo} alt="" />
                  </a>
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nguyenhuythanh256@gmail.com" alt="" target='_ blank'>
                    <img src={EmailLogo} alt="" />
                  </a>
                </div>
              </div>
              <div className="owner">
                <img src={NhutKhang} alt="" />
                <div className="owner-link">
                  <a href="https://www.facebook.com/tlnKhan9.oliver" alt="">
                    <img src={FacebookLogo} alt="" />
                  </a>
                  <a href="" alt="">
                    <img src={EmailLogo} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
