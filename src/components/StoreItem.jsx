import React from 'react';
import {Link} from "react-router-dom";

function StoreItem({storeObject}) {

    return (
        <div dir="rtl" id="slider_item" className="w-64 h-64">
            <div className="flex flex-col gap-1 items-center">
                <img className="w-36 h-36 object-cover rounded-full"
                     src={storeObject.ProfilePicture} alt=""/>
                <Link to={`/stores/${storeObject.Id}`} className="flex flex-col items-center">
                    <span className="font-bold text-md">{storeObject.Title}</span>
                    {
                        storeObject.StoreCategory.map((cat, index) => (
                            <span key={index}>{cat.NameAr}</span>
                        ))
                    }
                </Link>
            </div>
        </div>
    );
}

export default StoreItem;