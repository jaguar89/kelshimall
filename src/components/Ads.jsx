import React, {useEffect, useState} from 'react';
import {fetchAdsByFilterParameter} from "../apiService.js";
import AdItem from "./AdItem.jsx";
import {Link, useNavigate} from "react-router-dom";
import {Spinner} from "flowbite-react";
import AdCard from "./AdCard.jsx";

function Ads({filterParameters, page, onSetPage}) {
    const [allAds, setAllAds] = useState([]);
    const [info, setInfo] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setInfo("");
        setAllAds([]);
        const fetchData = async () => {
            try {
                const data = await fetchAdsByFilterParameter(filterParameters);
                // console.log('All Store\'s Ads Data from api:', data);
                if (data.length === 0) {
                    if (page > 0) onSetPage(0);
                    else setInfo("لا يوجد معلومات.");
                }
                setAllAds(data);
            } catch (error) {
                // console.error('Error, Ads.jsx: ' + error);
                navigate('/404');
                onSetPage(0);
            }
        };

        fetchData();

    }, [filterParameters]);

    return (
        allAds.length === 0 ?
            <div dir={'rtl'} className="mx-auto text-center p-4">
                {
                    info !== "" ? info :  <Spinner aria-label="Default status example"/>
                }
            </div> :
            <div className="p-10  flex flex-col gap-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 p-1 ">

                    {
                        allAds.map((item, index) => {
                            return (
                                <div key={index} className="bg-white border border-gray-200 shadow-md rounded-md p-2">
                                    {/*<AdItem adObject={item}/>*/}
                                    <AdCard adObject={item}/>
                                </div>
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

export default Ads;