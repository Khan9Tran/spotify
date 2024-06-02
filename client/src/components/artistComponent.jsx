import React, { useState } from 'react'
import DefaultImage from '../assets/images/thanh_huy.png'
import PlayIcon from '../assets/images/play_icon.png'

const ArtistComponent = ({ imageURL, name, profession, handlePlayIconClicked }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className=' max-w-[240px] min-w-[150px] flex flex-col justify-start p-3 rounded-md hover:bg-[#313131] relative'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img className='artist-information w-full h-auto min-w-[130px] rounded-[50%]' src={imageURL !== undefined ? imageURL : DefaultImage} alt="" />
            <span className='text-white-primary text-[18px] font-bold mt-1'>
                {name !== undefined ? name : 'Artist name'}
            </span>
            <span className='text-gray-light text-[13px]'>
                {profession !== undefined ? profession : 'Artist'}
            </span>

            <div
                className={`play-icon w-14 h-14 bg-green-light absolute top-[60%] right-[10%] rounded-[50%] flex justify-center items-center pl-2 transition-transform duration-300 ease-linear ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-[30%] opacity-0'}`} onClick={handlePlayIconClicked !== undefined ? handlePlayIconClicked : () => { }}>
                <img src={PlayIcon} alt="" />
            </div>
        </div>
    );
}

export default ArtistComponent;


