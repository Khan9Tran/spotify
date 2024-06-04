import { useState } from 'react';
import SearchIcon from './/../assets/images/search_icon.png'

const Search =  () =>{

    return (
        <div className={`relative opacity-80`}>
            <input type="search" placeholder="Bạn muốn phát nội dung gì?" className="min-h-[50px] min-w-[320px] bg-gray-very-dark pl-10 text-[13px] text-gray-light" style={{borderRadius:"20px"}} />
            <img src={SearchIcon} className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 w-6" />
        </div>
    );
}

export default Search;