import React from 'react'

const BodyComponentTittle = ({ tittle, seeAllText, handleSeeAllClicked, width, height, backgroundColor }) => {
    return (
        <div className={` ${width !== undefined ? width : 'w-fit'} ${height !== undefined ? height : 'h-fit'} ${backgroundColor !== undefined ? backgroundColor : 'bg-transparent'} flex flex-row items-end justify-between px-5 pb-1`}>
            <span className='text-white-primary text-[20px] font-bold mt-9'>
                {tittle !== undefined ? tittle : 'Tittle'}
            </span>
            <span className='hover:underline font-bold text-gray-light text-[13px] cursor-pointer' onClick={handleSeeAllClicked}>
                {seeAllText !== undefined ? seeAllText : 'See all'}
            </span>
        </div>
    )
}

export default BodyComponentTittle;
