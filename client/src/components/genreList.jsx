import { Genre } from "./genreComponent";
import BodyComponentTittle from "./bodyComponentTittle";
export const GenreList = ({items}) => {
    return (
        <div
        className=' max-w-full min-w-[150px] h-auto flex flex-col justify-start p-5 rounded-md hover:bg-[#313131] relative'>
            <h1 className='text-white-primary text-[22px] font-bold my-2'>
            Duyệt tìm tất cả
            </h1>
            <div className="flex flex-wrap">
                {items.map((item, index) => (
                    Genre(item, index)
                ))}
            </div>
        </div>
    );
}