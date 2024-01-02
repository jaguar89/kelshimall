import React from 'react';
import ContactUs from "../components/ContactUs.jsx";
import {Link} from "react-router-dom";

function Services(props) {
    return (
        <>
            <div dir={'rtl'} className="flex flex-col gap-10 bg-gray-50">
                <span className="pr-10 pt-10 text-xl text-blue-900 font-bold">&laquo;خدمات كلشي مول&raquo;</span>
                <div id="back" className="w-full h-auto   ">
                    <div id="front" className="flex flex-col gap-10 w-full h-auto  mt-10 py-12">

                        <div id="dashed_bg" className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center w-full z-999">
                            <Link to={'/memberships'} className="md:w-1/3">
                                <div
                                    className="flex flex-col gap-2 md:gap-4 lg:gap-8 bg-primary p-4 md:p-6 lg:p-10 items-center text-white rounded-xl w-full">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl">الإشتراكات</h2>
                                    <span className="text-sm underline">استعرض باقات الإشتراكات</span>
                                </div>
                            </Link>
                            <Link to={'/paid_services'} className="md:w-1/3">
                                <div
                                    className="flex flex-col gap-2 md:gap-4 lg:gap-8 bg-primary p-4 md:p-6 lg:p-10 items-center text-white rounded-xl w-full">
                                    <h2 className="text-xl md:text-2xl lg:text-3xl">الخدمات المأجورة</h2>
                                    <span className="text-sm underline">استعرض الخدمات</span>
                                </div>
                            </Link>
                        </div>

                        <div className="w-full flex flex-col md:flex-row mt-[10rem] gap-20 items-center justify-center">
                            <img className="w-1/3 h-auto" src="../../images/services_mobile2.png"/>
                            <img className="w-1/3 h-auto" src="../../images/services_mobile1.png"/>
                        </div>

                    </div>

                </div>


            </div>
            <ContactUs/>
        </>
    );
}

export default Services;