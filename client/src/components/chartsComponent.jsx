import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/images/thanh_huy.png'
import PlayIcon from '../assets/images/play_icon.png'
import Logo from './logo'

const ChartsComponent = ({ name, tittle, content, handleItemClicked }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [color1, setColor1] = useState(null);
    const [color2, setColor2] = useState(null);

    const colors = ['#324AB8', '#DB2C3D', '#503850', '#19BA74', '#EC1E32', '#B31472', '#1E3264', '#1C8076', '#EB1E32', '#773795'];

    useEffect(() => {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor1(randomColor);

        randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor2(randomColor);

    }, []);


    return (
        <div
            className=' max-w-[240px] min-w-[150px] flex flex-col justify-start p-3 rounded-md hover:bg-[#313131] relative cursor-pointer'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='w-full h-auto min-w-[130px] rounded-md py-2 flex flex-col' style={{backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2})`}}>
                <div className='w-full h-auto px-2'>
                    <Logo width={'20px'} height={'20px'} />
                </div>
                <span className='font-bold text-[26px] mx-2 text-white-secondary mt-[25%] mb-[35%] truncate'>
                    {name !== undefined ? name : 'Name fffffffff'}
                </span>

            </div>
            <span className='text-white-primary text-[15px] font-bold mt-1 truncate'>
                {tittle !== undefined ? tittle : 'Bảng xếp hạng phổ biến'}
            </span>
            <span className='text-gray-light text-[13px] truncate'>
                {content !== undefined ? content : 'Thông tin về bảng xếp hạng phổ biến'}
            </span>

            <div
                className={`w-14 h-14 bg-green-light absolute top-[60%] right-[10%] rounded-[50%] flex justify-center items-center pl-2 transition-transform duration-300 ease-linear ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-[30%] opacity-0'}`} onClick={handleItemClicked !== undefined ? handleItemClicked : () => { }}>
                <img src={PlayIcon} alt="" />
            </div>
        </div>
    );
}

export default ChartsComponent;