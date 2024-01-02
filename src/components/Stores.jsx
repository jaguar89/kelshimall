import React, {useEffect, useState} from 'react';
import {fetchAdsByFilterParameter, fetchStoresByFilterParameter} from "../apiService.js";
import AdItem from "./AdItem.jsx";
import {Link} from "react-router-dom";
import StoreItem from "./StoreItem.jsx";
import {Spinner} from "flowbite-react";

function Stores({filterParameters, page, onSetPage}) {
    const [allStores, setAllStores] = useState([]);
    const [info, setInfo] = useState("");

    useEffect(() => {
        setInfo("");
        setAllStores([]);
        const fetchData = async () => {
            try {
                const data = await fetchStoresByFilterParameter(filterParameters);
                // console.log('All Store\'s  Data from api:', data);
                if (data.length === 0) {
                    if (page > 0) onSetPage(0);
                    else setInfo("لا يوجد معلومات.");
                }
                setAllStores(data);
            } catch (error) {
                // console.error('Error, Stores.jsx: ' + error);
                onSetPage(0);
                setInfo("");
            }
        };
        fetchData();

    }, [filterParameters]);


    return (
        allStores.length === 0 ?
            <div dir={'rtl'} className="mx-auto text-center p-4">
                {
                    info !== "" ? info :  <Spinner aria-label="Default status example"/>
                }

            </div> :
            <div className="p-10  flex flex-col gap-10">
                <input type="hidden" id="totalResults" name="totalResults" value={allStores.length}/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-1 ">

                    {
                        allStores.map((item, index) => {
                            return (
                                // <div key={index} className="bg-white border border-gray-200 shadow-md rounded-md p-2">

                                    <StoreItem key={index} storeObject={item}/>

                                // </div>
                            );
                        })
                    }

                </div>
                <div className="flex flex-row gap-2 items-center justify-between">
                    <button onClick={() => {
                        window.scrollTo(0, 0);
                        onSetPage(page - 1 < 0 ? 0 : page - 1);
                    }} className="w-8 h-auto"><img src="../../images/right-arrow.svg"/>
                    </button>
                    <span> &#123;&nbsp;  الصفحة &nbsp;  {page + 1}&nbsp; &#125; </span>
                    <button onClick={() => {
                        window.scrollTo(0, 0);
                        onSetPage(page + 1);
                    }} className="w-8 h-auto"><img src="../../images/left-arrow.svg"/>
                    </button>
                </div>
            </div>

    );
}

export default Stores;