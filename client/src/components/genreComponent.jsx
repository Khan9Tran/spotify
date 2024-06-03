export const Genre = (item, index) => {
    return (
        <div key ={index} className="w-1/4  h-auto bg-white m-2"  style={item.img ? {backgroundImage: `url(${item.img})`, borderRadius:'10px'} : {borderRadius:'10px'}}>
            {item.name ? <span className="text-white-primary text-[14px] font-bold">{item.name}</span> : null}
        </div>
    );
}