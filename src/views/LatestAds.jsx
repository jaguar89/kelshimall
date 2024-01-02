import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Ads from "../components/Ads.jsx";
import ContactUs from "../components/ContactUs.jsx";

function LatestAds(props) {

    const[page , setPage] = useState(0);
    function renderLatestAds() {
        return <Ads filterParameters={{'Latest': true , 'pageId':page , 'pageSize':10}}  page={page} onSetPage={setPage} />;
    }


    return (
        <>
            <div dir={'rtl'} className="p-10 pr-12 flex flex-col gap-10">

                <div className="flex flex-row items-center gap-2">
                    <Link to={'/'} className="text-blue-900 font-bold">الرئيسية</Link> &raquo;
                    <span className="text-blue-900 font-bold">أحدث الإعلانات</span>
                </div>

                {
                    renderLatestAds()
                }

            </div>
            <ContactUs />
        </>
    );
}

export default LatestAds;