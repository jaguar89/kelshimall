import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Ads from "../components/Ads.jsx";
import ContactUs from "../components/ContactUs.jsx";

function FeaturedAds(props) {

    const[page , setPage] = useState(0);
    function renderFeaturedAds() {
        return <Ads filterParameters={{'Latest': false , 'isFeatured' : true , 'pageId':page , 'pageSize':10}}  page={page} onSetPage={setPage} />;
    }

    return (
        <>
            <div dir={'rtl'} className="py-4 lg:p-10 lg:pr-12 flex flex-col gap-10">
                <div className="flex flex-row items-center gap-2 p-2 lg:p-0">
                    <Link to={'/'} className="text-blue-900 font-bold">الرئيسية</Link> &raquo;
                    <span className="text-blue-900 font-bold"> الإعلانات المميزة</span>
                </div>

                {
                    renderFeaturedAds()
                }

            </div>
            <ContactUs />
        </>
    );
}

export default FeaturedAds;