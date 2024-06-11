import React, { useEffect, useState, useRef } from 'react';

export const BlueBoxComponent = () => {
    const [isVisible, setIsVisible] = useState(true);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsVisible(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    return (
        <div ref={ref} className="absolute left-[420px] w-[320px] h-[140px] bg-blue-600 text-white p-6 rounded-lg z-[999999]">
            {/* Content of the blue box goes here */}
        </div>
    );
}