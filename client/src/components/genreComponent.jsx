export const Genre = (item, index) => {
    const randomColor = () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    return (
        <div key ={index} className="w-[220px] min-h-[140px] my-3 mr-1 relative overflow-hidden"  style={{borderRadius:'10px', backgroundColor:randomColor()}}>
            {item.name ? <span className="text-white-primary text-[18px] font-bold p-6">{item.name}</span> : null}
            {item.img ? <img className="transform rotate-45 absolute w-32 h-32 -right-6 -bottom-6" aria-hidden="false" draggable="false" loading="lazy" style={{borderRadius:'5px'}} src={item.img} alt=""/> : null}
            
        </div>
    );
}