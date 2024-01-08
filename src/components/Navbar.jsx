import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import config from '../config.json';

function Navbar(props) {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/search/${search}`);
    };
    return (
        <header>
            <nav
                className="flex flex-col z-100 lg:flex-row-reverse items-center justify-between gap-0 p-0 min-h-32 lg:h-32 w-full bg-secondary">
                <div className="flex flex-row-reverse items-center justify-between w-full px-2">
                    <Link to={'/'} id="logo" className="md:pr-4">
                        {/*<img src="../images/logo-06.svg" alt=""/>*/}
                        <img className="w-32 lg:w-40 h-auto" src={config.logo} alt=""/>
                    </Link>
                    <div id="search"
                         className="flex flex-row-reverse gap-2 bg-white rounded-md px-4 items-center flex-1 justify-center">
                        <form onSubmit={handleSearch} className="w-full flex flex-row-reverse gap-2 border-none outline-none">
                            <input type="text"
                                   value={search}
                                   onChange={(e) => setSearch(e.currentTarget.value)}
                                   placeholder={"على شو عم تدور"}
                                   style={{outline:'none'}}
                                   className="py-2 pr-2  w-full text-right border-none outline-none focus:border-none focus:outline-none placeholder-right"/>
                            <button type="submit"><img src="../images/icon-action-search_24px.svg"/></button>
                        </form>
                    </div>
                </div>
                <div id="download_app"
                     className="text-white flex flex-col justify-center items-center lg:items-start gap-2 m-0 p-8 lg:p-4 h-full w-full lg:w-[40%] bg-primary">
                    {/*<div className="w-[80%] ">*/}
                    <span className="block text-white mb-2 ml-0 lg:ml-6">حمل تطبيق كلشي مول الآن</span>
                    <div className="flex flex-row items-center gap-4 md:gap-6 lg:gap-1 xl:gap-2">
                        <a href={config.play_store}
                           className="flex flex-row items-center hover:bg-btn_primaryLight rounded-md py-1 sm:py-2 px-2 sm:px-4 lg:p-1 xl:py-2 xl:px-4 gap-2 bg-btn_primary text-white text-xs sm:text-sm">عبر
                            بلاي ستور <img className="h-auto w-4" src="../images/Icon%20awesome-google-play.svg"
                                           alt="Google Play"/> </a>

                        {/*<a href="#"*/}
                        {/*   className="flex flex-row items-center hover:bg-btn_primaryLight rounded-md py-1 sm:py-2 px-2 sm:px-4 lg:p-1 xl:py-2 xl:px-4 gap-2 bg-btn_primary text-white text-xs sm:text-sm">عبر*/}
                        {/*    آبل ستور <img className="h-auto w-4" src="../images/Icon%20awesome-apple.svg"*/}
                        {/*                  alt="Apple Store"/> </a>*/}
                        <a href={config.direct_apk}
                           className="flex flex-row items-center hover:bg-btn_primaryLight rounded-md py-1 sm:py-2 px-2 sm:px-4 lg:p-1 xl:py-2 xl:px-4 gap-2 bg-btn_primary text-white text-xs sm:text-sm">
                             APK تحميل
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                 stroke="currentColor" className="w-5 h-auto">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                            </svg>
                           </a>
                    </div>
                    {/*</div>*/}
                </div>
            </nav>
        </header>
    );
}

export default Navbar;