import React, { useEffect, useRef, useState } from 'react';
import BodyComponentTittle from './bodyComponentTittle';
import ArtistComponent from './artistComponent';
import AlbumComponent from './albumComponent';
import RadioComponent from './radioComponent';
import ChartsComponent from './chartsComponent';

const MainBodyGuest = () => {
    const containerRef = useRef(null);
    const [numberOfItems, setNumberOfArtists] = useState(6);

    useEffect(() => {
        const handleResize = (entries) => {
            for (let entry of entries) {
                const currentWidth = entry.contentRect.width;
                const minTotalWidth = 50 * 2 + 150 * (numberOfItems);
                const maxTotalWidth = 50 * 2 + 150 * (numberOfItems + 1);
                if (currentWidth < minTotalWidth) {
                    setNumberOfArtists(prev => Math.max(prev - 1, 0));
                } else if (currentWidth >= maxTotalWidth && numberOfItems < 6) {
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
    }, [numberOfItems]);

    return (
        <div>
            <div className="main__body-component flex flex-col flex-grow">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-full'} tittle={'Nghệ sĩ phổ biến'} seeAllText={'Hiện tất cả'} />
                </div>
                <div ref={containerRef} className="body-component-content w-full h-auto px-3 flex flex-row flex-grow overflow-hidden">
                    <div className={numberOfItems < 1 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfItems < 2 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfItems < 3 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfItems < 4 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfItems < 5 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                    <div className={numberOfItems < 6 ? 'hidden' : ''}>
                        <ArtistComponent />
                    </div>
                </div>
            </div>
            <div className="main__body-component">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-ful'} tittle={'Album phổ biến'} seeAllText={'Hiện tất cả'} />
                </div>
                <div ref={containerRef} className="body-component-content w-full h-auto px-3 flex flex-row flex-grow overflow-hidden">
                    <div className={numberOfItems < 1 ? 'hidden' : ''}>
                        <AlbumComponent />
                    </div>
                    <div className={numberOfItems < 2 ? 'hidden' : ''}>
                        <AlbumComponent />
                    </div>
                    <div className={numberOfItems < 3 ? 'hidden' : ''}>
                        <AlbumComponent />
                    </div>
                    <div className={numberOfItems < 4 ? 'hidden' : ''}>
                        <AlbumComponent />
                    </div>
                    <div className={numberOfItems < 5 ? 'hidden' : ''}>
                        <AlbumComponent />
                    </div>
                    <div className={numberOfItems < 6 ? 'hidden' : ''}>
                        <AlbumComponent />
                    </div>
                </div>
            </div>
            <div className="main__body-component">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-ful'} tittle={'Radio phổ biến'} seeAllText={'Hiện tất cả'} />
                </div>
                <div ref={containerRef} className="body-component-content w-full h-auto px-3 flex flex-row flex-grow overflow-hidden">
                    <div className={numberOfItems < 1 ? 'hidden' : ''}>
                        <RadioComponent />
                    </div>
                    <div className={numberOfItems < 2 ? 'hidden' : ''}>
                        <RadioComponent />
                    </div>
                    <div className={numberOfItems < 3 ? 'hidden' : ''}>
                        <RadioComponent />
                    </div>
                    <div className={numberOfItems < 4 ? 'hidden' : ''}>
                        <RadioComponent />
                    </div>
                    <div className={numberOfItems < 5 ? 'hidden' : ''}>
                        <RadioComponent />
                    </div>
                    <div className={numberOfItems < 6 ? 'hidden' : ''}>
                        <RadioComponent />
                    </div>
                </div>
            </div>
            <div className="main__body-component">
                <div className="body-component-tittle">
                    <BodyComponentTittle width={'w-ful'} tittle={'Bảng xếp hạng Nổi bật'} seeAllText={'Hiện tất cả'} />
                </div>
                <div ref={containerRef} className="body-component-content w-full h-auto px-3 flex flex-row flex-grow overflow-hidden">
                    <div className={numberOfItems < 1 ? 'hidden' : ''}>
                        <ChartsComponent />
                    </div>
                    <div className={numberOfItems < 2 ? 'hidden' : ''}>
                        <ChartsComponent />
                    </div>
                    <div className={numberOfItems < 3 ? 'hidden' : ''}>
                        <ChartsComponent />
                    </div>
                    <div className={numberOfItems < 4 ? 'hidden' : ''}>
                        <ChartsComponent />
                    </div>
                    <div className={numberOfItems < 5 ? 'hidden' : ''}>
                        <ChartsComponent />
                    </div>
                    <div className={numberOfItems < 6 ? 'hidden' : ''}>
                        <ChartsComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainBodyGuest;

