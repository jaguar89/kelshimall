import React from 'react';
import {Link} from "react-router-dom";

function AdItem({adObject}) {

    function formattedPrice(price){
        //en-US
        return price.toLocaleString('ar-EG', {style: 'currency', currency: 'SYP'});
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
        const formattedDate = new Date(dateString).toLocaleDateString('en-GB', options);
        return formattedDate;
    }

    const maxTitleLength = 10;
    const maxDescriptionLength = 25;

    const truncatedTitle = adObject.Title ? adObject.Title.substring(0, maxTitleLength) + (adObject.Title.length > maxTitleLength ? '...' : '') : '';
    const truncatedDescription = adObject.Description ? adObject.Description.substring(0, maxDescriptionLength) + (adObject.Description.length > maxDescriptionLength ? '...' : '') : '';


    return (
        <div id="slider_item" dir="rtl"
             className="w-auto h-64 relative border-none">
            {
                adObject.IsNegotiable && <span
                    className="bg-primary text-white px-4 py-1  text-sm absolute top-0 -translate-y-[100%] right-0 z-10  rounded-tl-xl rounded-tr-xl ">منتفاوض</span>
            }

            {adObject.IsFeatured &&
                <div className="absolute top-0 w-full  bg-[#FABD00] flex items-center justify-center opacity-75 text-md font-bold">مميز</div>
            }
            <img className="w-full h-full object-cover" src={adObject.ImageUrl} alt=""/>
            <Link to={`/ads/${adObject.PostId}`}
                className="w-full flex flex-col gap-0 p-1 h-1/2  text-white text-right  absolute bottom-0 left-0"
                style={{backgroundImage: `url('../../images/Rectangle 2018.svg')`}}>
                <div
                    className="flex flex-row font-bold text-md justify-between px-2 mb-2">
                    <span>{truncatedTitle}</span>
                    <span>{formattedPrice(adObject.Price)}</span>
                </div>
                <div>
                    {/*<span className="bg-white text-black rounded-md p-1 px-2">{adObject.storeInfo.Title}</span>*/}
                </div>
                <p className="">{truncatedDescription === 'null' ? '' : truncatedDescription}</p>
                <span>{formatDate(adObject.PublicationDate)}</span>
            </Link>
        </div>
    );
}

export default AdItem;