import React, {Component, useState} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useHomeContext} from "../contexts/ContextProvider.jsx";
import {Link} from "react-router-dom";
import AdItem from "./AdItem.jsx";
import StoreItem from "./StoreItem.jsx";

function Tabs(props) {
    const homeContext = useHomeContext();
    const [selectedTab, setSelectedTab] = useState(0)
    const items = ['أحدث الإعلانات', 'الإعلانات المميزة', 'المتاجر'];
    const latestAds = homeContext.ads;
    const featuredAds = homeContext.featuredAds;
    const stores = homeContext.stores;
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        rtl: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section id="home_tabs" className=" w-full h-full">
            <ul id="tabs_navigation"
                className="flex flex-row-reverse flex-wrap text-sm font-medium text-center w-full items-center justify-center p-0 text-gray-500 border-b border-gray-200">

                {
                    items.map((item, index) => {
                        return (
                            <li key={index} onClick={() => setSelectedTab(index)}
                                className={`block p-4 w-1/3 text-xs md:text-md  border-gray-400  cursor-pointer 
                                ${index !== 0 ? 'border-r' : ''}
                                ${selectedTab === index ? 'bg-primary text-white' : 'bg-gray-100 text-primary hover:bg-primary hover:text-white'}`}>
                                {item}
                            </li>
                        );
                    })
                }
            </ul>
            <div id="tabs_content">
                {selectedTab === 0 && <div className="pt-14 w-full overflow-hidden">
                    <Slider {...settings}>
                        {
                            latestAds.map((item, index) => {
                                return <AdItem key={index} adObject={item}/>
                            })
                        }
                    </Slider>
                    <div className=" flex items-center justify-center mt-10">
                        <Link to={'/latest-ads'}
                              className="text-primary bg-white border-2 border-primary py-2 px-4 rounded-md font-bold">عرض
                            الكل
                        </Link>

                    </div>
                </div>}
                {selectedTab === 1 && <div className="pt-14 w-full overflow-hidden">
                    <Slider {...settings}>
                        {
                            featuredAds.map((item, index) => {
                                return <AdItem key={index} adObject={item}/>
                            })
                        }
                    </Slider>
                    <div className=" flex items-center justify-center mt-10">
                        <Link to={'/featured-ads'}
                              className="text-primary bg-white border-2 border-primary py-2 px-4 rounded-md font-bold">عرض
                            الكل
                        </Link>

                    </div>
                </div>}
                {selectedTab === 2 && <div className="pt-14 w-full overflow-hidden">
                    <Slider {...settings}>
                        {
                            stores.map((item, index) => {
                                return <StoreItem key={index} storeObject={item}/>
                            })
                        }
                    </Slider>
                    <div className=" flex items-center justify-center mt-10">
                        <Link to={'/stores'}
                              className="text-primary bg-white border-2 border-primary py-2 px-4 rounded-md font-bold">عرض
                            الكل
                        </Link>

                    </div>
                </div>}
            </div>
        </section>
    );
}

export default Tabs;