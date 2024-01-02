import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ContactUs from "../components/ContactUs.jsx";
import {useHomeContext} from "../contexts/ContextProvider.jsx";
import {fetchHomeData, fetchStoresByFilterParameter} from "../apiService.js";
import Ads from "../components/Ads.jsx";
import Stores from "../components/Stores.jsx";

function AllStores(props) {
    const homeContext = useHomeContext();
    const categories = homeContext.categories;

    const [categoryId, setCategoryId] = useState('');
    const [page, setPage] = useState(0);

    const handleOnChange = (e) => {
        const value = e.currentTarget.value;
        setCategoryId(value);
    };


    function renderStoresByCategory() {
        return <Stores filterParameters={{'parentCategoryId': parseInt(categoryId), 'pageId': page, 'pageSize': 9}}
                       page={page} onSetPage={setPage}/>;
    }

    return (
        <>
            <div dir={'rtl'} className="p-10 pr-12 flex flex-col gap-10">

                <div className="flex flex-row items-center gap-2">
                    <Link to={'/'} className="text-blue-900 font-bold">الرئيسية</Link> &raquo;
                    <span className="text-blue-900 font-bold">كل المتاجر</span>
                    <div className="flex flex-col gap-2 relative w-1/3 mr-8">
                        <select
                            name="type"
                            className="border border-gray-300 focus:outline-none rounded-md p-2 bg-secondary "
                            value={categoryId}
                            onChange={handleOnChange}
                        >
                            <option value="">اعرض حسب التصنيف</option>
                            {
                                categories.map((item, index) => {
                                    return (
                                        <option key={index} value={item.Id}>{item.Name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>

                {
                    renderStoresByCategory()
                }

            </div>
            <ContactUs/>
        </>
    );
}

export default AllStores;