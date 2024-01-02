import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import ContactUs from "../components/ContactUs.jsx";
import Ads from "../components/Ads.jsx";

function Search(props) {
    const {word} = useParams();
    const [page, setPage] = useState(0);


    function renderSearchResult() {
        return  <Ads filterParameters={{'title': word , 'description': word, 'pageId':page , 'pageSize': 10}} page={page}
                     onSetPage={setPage}/>

    }


    return (
        <>
            <div dir={'rtl'} className="p-10 pr-12 flex flex-col gap-10">

                <div className="flex flex-row items-center gap-2">
                    <Link to={'/'} className="text-blue-900 font-bold">الرئيسية</Link> &raquo;
                    <span className="text-blue-900 font-bold">نتائج البحث</span>
                    <span className="text-blue-900 font-bold">&nbsp;&nbsp;&nbsp;/&nbsp;{word}</span>
                </div>

                {
                    renderSearchResult()
                }

            </div>
            <ContactUs/>
        </>
    );
}

export default Search;