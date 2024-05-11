import React from 'react';
import {Link} from "react-router-dom";
import {useHomeContext} from "../contexts/ContextProvider.jsx";
import config from '../config.json';

function Footer(props) {
    const homeContext = useHomeContext();


    return (
        <footer  className="w-full mt-8 flex flex-col ">
            <div id="footer__bg">
                <div id="footer__dark" className="w-full flex flex-col gap-8  items-center justify-center px-12 py-20 lg:py-36">
                    <h1 className="text-3xl text-white font-bold">جاهز تبلش؟</h1>
                    <h1 className="text-3xl text-white font-bold text-center">حمل تطبيق كلشي مول الآن</h1>
                    <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-6  ">
                        <a  href={config.play_store}
                           className="flex flex-row items-center justify-start rounded-xl hover:bg-primaryLight px-4  py-3 lg:px-8 lg:py-4 gap-2 bg-primary ">
                            <span className="text-white text-sm lg:text-xl">عبر بلاي ستور</span>
                            <img className="h-auto w-5 md:w-6" src="../images/Icon%20awesome-google-play.svg"
                                 alt="Google Play"/> </a>
                        {/*<a href="#"*/}
                        {/*   className="flex flex-row items-center justify-start rounded-xl hover:bg-primaryLight px-4 py-2 lg:px-8 lg:py-4 gap-2 bg-primary">*/}
                        {/*    <span className="text-white text-sm lg:text-xl">عبر آبل ستور</span>*/}
                        {/*    <img className="h-auto w-4 md:w-6" src="../images/Icon%20awesome-apple.svg"*/}
                        {/*         alt="Apple Store"/> </a>*/}
                        <a href={config.direct_apk}
                           className="flex flex-row items-center justify-start rounded-xl hover:bg-primaryLight px-5 py-3 lg:px-8 lg:py-4 gap-2 bg-primary">
                            <span className="text-white text-sm lg:text-xl"> APK تحميل</span>
                            <svg   xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                   stroke="currentColor" className="w-auto h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-primary px-12 md:px-16 md:px-24 pt-8 pb-8  flex flex-col gap-4">
                <div className="flex flex-col md:flex-row items-center justify-around text-white  gap-10 md:gap-6 py-8 border-b border-gray-400">
                    <Link to={'/services'}>خدمات كلشي مول</Link>
                    <Link to={'/terms-of-use'}>شروطالإستخدام</Link>
                    <Link to={'/safety-rules'}>قواعد السلامة</Link>
                    <img src='../images/logo-02.svg' />
                    <Link to={'/banned-ads'}>الإعلانات الممنوعة</Link>
                    <Link to={'/seller-tips'}>نصائح للبائع</Link>
                    <Link to={'/about-kelshimall'}>حول كلشي مول</Link>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-around text-white gap-10  border-b border-gray-400 py-8">
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-6 h-auto" src="../images/Group 56.svg" />
                        <a href="tel:{homeContext.contactWhatsapp}"
                           className="inline-block text-center">{homeContext.contactWhatsapp}</a>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-8 h-auto" src="../images/Group 57.svg" />
                        <a href="mailto:Kelshimall@gmail.com" className="inline-block">Kelshimall@gmail.com</a>
                    </div>
                    <div className="flex flex-col items-center gap-4">
                        <img className="w-8 h-auto" src="../images/Group 58.svg" />
                        <span className="inline-block">سوريا , دمشق</span>
                    </div>
                </div>
                <p className="text-white text-center text-sm pt-4 mx-auto">Copyright @ 2024 Kelshi mall. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;