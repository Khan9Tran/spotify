import { Genre } from "./genreComponent";
import BodyComponentTittle from "./bodyComponentTittle";
export const GenreList = ({items}) => {
    return (
        <div
        className=' max-w-[1460px] min-w-[150px] flex flex-col justify-start p-5 rounded-md hover:bg-[#313131] relative'>
            <h1 className='text-white-primary text-[22px] font-bold my-2'>
            Duyệt tìm tất cả
            </h1>
            <div className="flex flex-wrap justify-between">
                {items.map((item, index) => (
                    Genre(item, index)
                ))}
            </div>
        </div>
    );
}