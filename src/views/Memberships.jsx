import React, {useEffect, useState} from 'react';
import {fetchMembershipsData} from "../apiService.js";
import {Link} from "react-router-dom";
import ContactUs from "../components/ContactUs.jsx";
import {Spinner} from "flowbite-react";

function Memberships(props) {
    const [selectedTab, setSelectedTab] = useState(0)
    const [memberships, setMemberships] = useState([]);
    const items = ['مجاني', 'واجهة', 'محل', 'متجر'];

    useEffect(() => {

        const fetchData = async () => {
            try {
                const data = await fetchMembershipsData();
                // console.log('Memberships Data from api:', data);
                setMemberships(data);
            } catch (error) {
                // console.error('Error, Memberships.jsx: ' + error);
            }
        };

        fetchData();

    }, []);


    function renderFeatures(index) {
        if (memberships.length === 0) return;
        const membership = memberships[index];

        return (
            <div className="flex flex-col w-full items-center justify-center gap-2 pt-4">
                {
                    membership['features'].map((item, index) => (
                        <div key={index}
                             className="flex flex-row w-2/3 border-b border-gray-300 py-4 items-center justify-between">
                            <div className="flex flex-col gap-2">
                                <h3 className="text-primary text-md font-bold">{item.title}</h3>
                                <p className="text-gray-600 text-xs lg:text-lg">{item.desc}</p>
                            </div>
                            <span className="text-btn_primary text-xl font-bold">{item.value}</span>
                            {
                                item.hasOwnProperty('isChecked') ?
                                    (<img className="w-4 h-4"
                                          src={`${item.isChecked ? '../../images/checkIcon.svg' : '../../images/xIcon.svg'}`}/>)
                                    : ''

                            }
                        </div>
                    ))
                }
            </div>
        );
    }

    function renderPlans(index) {
        if (memberships.length === 0) return;
        const membership = memberships[index];

        return (
            <div className="flex flex-row flex-wrap w-full items-center justify-center  gap-8 sm:gap-2">
                {
                    membership['plans'].map((item, index) => (
                        <div key={index}
                             className="flex flex-col h-36 max-w-1/2 sm:max-w-1/3 md:w-auto border rounded-md gap-2 px-8 border-gray-400 pt-8 items-center justify-center relative group hover:bg-btn_primary hover:border-gray-200 cursor-pointer">
                            <span
                                className="bg-customGray2 text-gray-700 font-bold rounded-full w-14 h-14 text-sm flex flex-col items-center justify-center absolute top-0 -translate-y-[50%]  group-hover:bg-primary group-hover:text-white">{item.value}
                                <span>شهر</span></span>
                            {item.oldPrice !== item.newPrice &&
                                <span className="text-gray-400 font-semibold relative group-hover:text-white"> <div
                                    className="canceled-line w-8"></div>
                                    {item.oldPrice}</span>}
                            <span className="text-gray-800 font-bold group-hover:text-white">{item.newPrice}</span>
                            <span className="text-gray-700 text-sm font-bold group-hover:text-white">ليرة/شهر</span>
                        </div>
                    ))
                }
            </div>
        );
    }

    return (
        memberships.length === 0 ?    <div dir={'rtl'} className="mx-auto text-center p-4"><Spinner aria-label="Default status example"/></div>:
        <>
            <div dir={'rtl'} className="flex flex-col gap-10">
                <Link to={'/services'} className="pr-10 pt-10">
                    <span className=" text-xl text-blue-900 font-bold">&laquo;خدمات كلشي مول&raquo;</span>
                </Link>
                <div id="back" className="w-full h-auto">


                    <div id="front" className="flex flex-col w-full items-center lg:p-10">
                        <h1 className="text-3xl p-2 font-bold text-btn_primary w-full text-right">اشتراكات تناسب الجميع على
                            كلشي
                            مول</h1>

                        <div
                            className="flex flex-col items-center justify-center gap-10 w-[90%] rounded-md border border-gray-300 h-auto  mt-10 py-12 bg-white">


                            <h2 className="text-xl text-blue-900 font-bold">أنواع المتاجر</h2>
                            <ul id="tabs_navigation"
                                className="flex flex-row flex-wrap text-sm font-medium text-center w-full items-center justify-center p-0 text-gray-500">

                                {
                                    items.map((item, index) => {
                                        return (
                                            <li key={index} onClick={() => setSelectedTab(index)}
                                                className={`inline-block p-4 lg:px-6  border-t border-b border-gray-400  cursor-pointer 
                                        ${index === 0 ? 'rounded-tr-md rounded-br-md border' : ''}
                                        ${index === 1 ? 'border-l' : ''}
                                        ${index === items.length - 1 ? 'rounded-tl-md rounded-bl-md  border' : ''}
                                        ${selectedTab === index ? 'bg-btn_primary text-white' : 'text-primary '}`}>
                                                {item}
                                            </li>
                                        );
                                    })
                                }
                            </ul>
                            <div id="tabs_content" className="w-full">
                                {
                                    selectedTab === 0 && renderFeatures(0)
                                }
                                {
                                    selectedTab === 1 && renderPlans(1)

                                }
                                {
                                    selectedTab === 1 && renderFeatures(1)

                                }
                                {
                                    selectedTab === 2 && renderPlans(2)

                                }
                                {
                                    selectedTab === 2 && renderFeatures(2)

                                }
                                {
                                    selectedTab === 3 && renderPlans(3)

                                }
                                {
                                    selectedTab === 3 && renderFeatures(3)

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

export default Memberships;