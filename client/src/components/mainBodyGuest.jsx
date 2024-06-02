import React, { useEffect, useRef, useState } from 'react';
import BodyComponentTittle from './bodyComponentTittle';
import ArtistComponent from './artistComponent';

const MainBodyGuest = () => {
    const containerRef = useRef(null);
    const [numberOfArtists, setNumberOfArtists] = useState(6);

    useEffect(() => {
        const handleResize = (entries) => {
            for (let entry of entries) {
                const currentWidth = entry.contentRect.width;
                const minTotalWidth = 20 * 2 + 150 * (numberOfArtists);
                const maxTotalWidth = 20 * 2 + 150 * (numberOfArtists + 1);
                if (currentWidth < minTotalWidth) {
                    setNumberOfArtists(prev => Math.max(prev - 1, 0));
                } else if (currentWidth >= maxTotalWidth && numberOfArtists < 6) {
                    setNumberOfArtists(prev => Math.min(prev + 1, 6));
                }
            }
        };

        const resizeObserver = new ResizeObserver(handleResize);

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                resizeObserver.unobserve(containerRef.current);
            }
        };
    }, [numberOfArtists]);

    return (
        <div>
            <div className="main__body-component flex flex-col flex-grow">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-full'} tittle={'Nghệ sĩ phổ biến'} seeAllText={'Hiện tất cả'} />
                </div>
                <div ref={containerRef} className="body-component-content w-full h-auto px-3 flex flex-row flex-grow overflow-hidden">
                    <div className={numberOfArtists < 1 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfArtists < 2 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfArtists < 3 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfArtists < 4 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfArtists < 5 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfArtists < 6 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                </div>
            </div>
            <div className="main__body-component">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-ful'} tittle={'Album phổ biến'} seeAllText={'Hiện tất cả'} />
                </div>
                <div className="body-component-content">
                </div>
            </div>
            <div className="main__body-component">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-ful'} tittle={'Radio phổ biến'} seeAllText={'Hiện tất cả'} />
                </div>
                <div className="body-component-content">
                </div>
            </div>
            <div className="main__body-component">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-ful'} tittle={'Bảng xếp hạng Nổi bật'} seeAllText={'Hiện tất cả'} />
                </div>
                <div className="body-component-content">
                </div>
            </div>
        </div>
    );
};

export default MainBodyGuest;

