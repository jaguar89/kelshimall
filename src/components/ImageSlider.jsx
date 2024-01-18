import React from 'react';
import {Carousel} from "flowbite-react";
import Spinner from "./Spinner.jsx";

function ImageSlider({addItem = null, banners, propertyName = null, slide = false, indicators = true, home = false}) {
    return (
        banners.length === 0 ?
            <Spinner/>:
            <div
                // className="h-56 sm:h-64 xl:h-80 2xl:h-96"
                dir={'ltr'}
                className={`h-48 sm:h-64 md:h-72 lg:80 ${home ? 'xl:h-screen' : 'xl:h-96'}`}
                id="carousel"
            >

                <Carousel slide={slide} indicators={indicators}>
                    {
                        !addItem ? banners.map((bannerObj, index) => (
                                <img
                                    key={index}
                                    className=" object-fit"
                                    src={propertyName ? bannerObj[propertyName] : bannerObj}
                                    alt={`Slide ${index + 1}`}
                                    onClick={() => {
                                        if (home)
                                            window.open(bannerObj["Link"], '_blank')
                                        else
                                            window.open(propertyName ? bannerObj[propertyName] : bannerObj, '_blank')
                                    }}
                                />
                            ))
                            :
                            banners.map((bannerObj, index) => (
                                <div key={index} className="relative w-full h-full" id="banner__dark">
                                    {addItem.IsFeatured &&
                                        <div
                                            className="absolute top-0 w-full z-50 bg-[#FABD00] flex items-center justify-center opacity-75 text-md font-bold">مميز</div>
                                    }
                                    <img

                                        className="h-full w-auto object-cover mx-auto z-10"
                                        src={bannerObj.OriginalFileName}
                                        alt={`Slide ${index + 1}`}
                                        onClick={() => window.open(bannerObj.OriginalFileName, '_blank')}
                                    />
                                </div>
                            ))
                    }
                </Carousel>
            </div>
    );
}

export default ImageSlider;