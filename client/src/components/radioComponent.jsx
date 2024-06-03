import React, { useEffect, useState } from 'react'
import DefaultImage from '../assets/images/thanh_huy.png'
import PlayIcon from '../assets/images/play_icon.png'
import Logo from './logo'

const RadioComponent = ({ imageURL1, imageURL2, imageURL3, name, artists, handleItemClicked }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [color, setColor] = useState(null);

    const colors = ['#D9A4FF', '#FF9F75', '#6E6B66', '#AB7850', '#834735', '#FF7163'];

    useEffect(() => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    }, []);


    return (
        <div
            className=' max-w-[240px] min-w-[150px] flex flex-col justify-start p-3 rounded-md hover:bg-[#313131] relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <div className='w-full h-auto min-w-[130px] rounded-md py-2' style={{ backgroundColor: color }}>
                <div className='w-full h-auto flex flex-row justify-between items-center px-2'>
                    <Logo width={'20px'} height={'20px'} />
                    <span className='font-bold text-[15px] text-black-primary'>RADIO</span>
                </div>
                <div className="w-full flex justify-between overflow-hidden relative py-[15%]">
                    <img className="w-2/5 h-auto rounded-full transform -translate-x-1/4" src={imageURL1 !== undefined ? imageURL1 : DefaultImage} alt="" />
                    <img className="w-3/5 h-auto rounded-full  border-[4px] absolute z-10 top-[50%] left-[50%] transform -translate-y-1/2 -translate-x-1/2" style={{ borderColor: color }} src={imageURL2 !== undefined ? imageURL2 : DefaultImage} alt="" />
                    <img className="w-2/5 h-auto rounded-full transform translate-x-1/4" src={imageURL3 !== undefined ? imageURL3 : DefaultImage} alt="" />
                </div>
                <span className='font-bold text-[23px] mx-2 text-black-primary'>
                    {name !== undefined ? name : 'Name'}
                </span>

            </div>
            <span className='text-white-primary text-[15px] font-bold mt-1'>
                {name !== undefined ? name + ' radio' : 'Name radio'}
            </span>
            <span className='text-gray-light text-[13px]'>
                {artists !== undefined ? 'Với ' + artists : 'Với artists'}
            </span>

            <div
                className={`w-14 h-14 bg-green-light absolute top-[60%] right-[10%] rounded-[50%] flex justify-center items-center pl-2 transition-transform duration-300 ease-linear ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-[30%] opacity-0'}`} onClick={handleItemClicked !== undefined ? handleItemClicked : () => { }}>
                <img src={PlayIcon} alt="" />
            </div>
        </div>
    );
}

export default RadioComponent;
