import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ContactUs from "../components/ContactUs.jsx";
import {fetchMembershipsData, fetchPaidServicesData} from "../apiService.js";

function PaidServices(props) {
    const [paidServices, setPaidServices] = useState([]);
    const [repost, setRepost] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPaidServicesData();
                // console.log('PaidServices Data from api:', data);
                setPaidServices(data.paid_services);
                setRepost(data.repost)
            } catch (error) {
                // console.error('Error, PaidServices.jsx: ' + error);
            }
        };

        fetchData();

    }, []);

    return (
        <>
            <div dir={'rtl'} className="flex flex-col gap-10">
                <Link to={'/services'} className="pr-10 pt-10">
                    <span className=" text-xl text-blue-900 font-bold">&laquo;خدمات كلشي مول&raquo;</span>
                </Link>

                <h1 className="text-3xl font-bold text-btn_primary pr-10 w-full text-right">خدمات تساعد على دعم
                    البيع</h1>

                <div id="back" className="w-full h-auto ">
                    <div id="front" className="flex flex-col gap-36 w-full h-auto  mt-10 py-12 ">
                        <div id="dashed_bg"
                             className="flex flex-col md:flex-row gap-16 items-center justify-center w-full px-4 sm:px-10 md:px-1">
                            <div className="w-full md:w-1/2 relative">
                                <img src="../../images/Group 6485.png"/>
                                <span className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-6xl font-bold text-blue-500">1</span>
                            </div>
                            <div className="w-full md:w-1/3  p-2 md:py-4 bg-gray-100 rounded-md flex flex-col gap-2">
                                <h2 className="text-2xl font-bold text-primary pb-2">باقات متنوعة</h2>
                                {
                                    paidServices.map((item, index) => {
                                        return (
                                            <div key={index}
                                                 className="flex flex-col sm:flex-row w-full items-center justify-center md:justify-between gap-2 border border-gray-300 rounded-md p-2">
                                                <input id={`ad${index}`} type="radio" name="paidService"/>
                                                <label style={{wordSpacing: '0.1rem'}} htmlFor={`ad${index}`}
                                                       className="text-center leading-7 tracking-normal text-md text-blue-900 ">
                                                    <span>إعلان مميز لمدة</span>
                                                    <span className="font-bold">&nbsp;{item.validityValue}</span>
                                                    <span>&nbsp;{item.validityValue < 3 || item.validityValue > 10 ? 'يوم' : 'أيام'}</span>
                                                </label>
                                                <span
                                                    className="text-btn_primary text-md font-bold">{item.price}&nbsp;ل.س</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                        <div
                            className="flex flex-col md:flex-row gap-16 items-center justify-center w-full px-4 sm:px-10 md:px-1">
                            <div className="w-full md:w-1/2 relative">
                                <img src="../../images/Group 6487.png"/>
                                <span className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-6xl font-bold text-blue-500">2</span>
                            </div>
                            <div className="w-full md:w-1/3  p-2 md:py-4 bg-gray-100 rounded-md flex flex-col gap-2">
                                <h2 className="text-2xl font-bold text-primary pb-2">باقات متنوعة</h2>
                                {
                                   repost.map((item, index) => {
                                        return (
                                            <div key={index}
                                                 className="flex flex-col sm:flex-row w-full items-center justify-center md:justify-between gap-2 border border-gray-300 rounded-md p-2">
                                                <input id={`re_ad${index}`} type="radio" name="re_ad"/>
                                                <label style={{wordSpacing: '0.1rem'}} htmlFor={`re_ad${index}`}
                                                       className="text-center leading-7 tracking-normal text-md text-blue-900 ">
                                                    <span>{item.name}</span>
                                               </label>
                                                <span
                                                    className="text-btn_primary text-md font-bold">{item.price}&nbsp;ل.س</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>


                    </div>
                </div>


            </div>
            <ContactUs/>
        </>
    );
}

export default PaidServices;