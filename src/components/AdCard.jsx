import React from 'react';
import {Link} from "react-router-dom";

function AdCard({adObject}) {
    function formattedPrice(price) {
        //en-US
        return price.toLocaleString('ar-EG', {style: 'currency', currency: 'SYP'});
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
        const formattedDate = new Date(dateString).toLocaleDateString('en-GB', options);
        return formattedDate;
    }

    const maxTitleLength = 15;
    const maxDescriptionLength = 25;

    const truncatedTitle = adObject.Title ? adObject.Title.substring(0, maxTitleLength) + (adObject.Title.length > maxTitleLength ? '...' : '') : '';
    const truncatedDescription = adObject.Description ? adObject.Description.substring(0, maxDescriptionLength) + (adObject.Description.length > maxDescriptionLength ? '...' : '') : '';


    return (
        <div dir="rtl"
             className="w-full h-64 md:h-72 relative border-none flex flex-row">
            {
                adObject.IsNegotiable && <span
                    className="bg-primary text-white px-4 py-1  text-sm absolute top-0 -translate-y-[100%] right-0 z-10  rounded-tl-xl rounded-tr-xl ">منتفاوض</span>
            }

            {adObject.IsFeatured &&
                <div
                    className="absolute top-0 w-full  bg-[#FABD00] flex items-center justify-center opacity-75 text-md font-bold">مميز</div>
            }

            {/*<Link to={`/ads/${adObject.PostId}`}>*/}
            <img className=" w-1/2 h-auto object-cover  " src={adObject.ImageUrl} alt=""/>
            {/*</Link>*/}
            <div
                className="w-full flex flex-col gap-4 p-4 h-1/2  h-auto pt-8 justify-evenly text-right  flex-1"
            >
                <Link to={`/ads/${adObject.PostId}`}><h2 className="font-bold text-md">{truncatedTitle}</h2></Link>

                <span className="font-bold text-xl">{formattedPrice(adObject.Price)}</span>

                <p className="">{truncatedDescription === 'null' ? '' : truncatedDescription}</p>
                <span className="text-gray-500 flex flex-row gap-1 items-center"><img className=" "
                                                                                      src="../../images/calendar-blank.svg"
                                                                                      alt=""/>{formatDate(adObject.PublicationDate)}</span>
                {
                    adObject.storeInfo.DisplayPrivateLogo &&
                    <Link to={`/stores/${adObject.storeInfo.Id}`} className="flex flex-row items-center gap-4">
                        <img className="w-12 h-12 object-cover rounded-full"
                             src={adObject.storeInfo.ProfilePicture} alt=""/>
                        <span className="text-sm font-bold ">{adObject.storeInfo.Title}</span>
                    </Link>
                }
            </div>
        </div>
    );
}

export default AdCard;