import React from 'react';
import {useHomeContext} from "../contexts/ContextProvider.jsx";

function ContactUs(props) {
    const homeContext = useHomeContext();

    return (
        <div className="w-full flex flex-col items-center justify-center bg-secondary gap-12 p-10 mt-0">
            <h1 className="text-btn_primary text-3xl font-bold text-center">لمزيد من النصائح والمعلومات تواصل معنا على</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex flex-row items-center justify-between gap-4 px-6 md:border-r-2 md:border-gray-300 md:pr-14">
                    <a href="tel:{homeContext.contactNumber}">{homeContext.contactNumber}</a>
                    <img src="../../images/phoneIcon.svg" />
                </div>
                <div className="flex flex-row items-center justify-between gap-4 px-6">
                    <a href="tel:{homeContext.contactWhatsapp}">{homeContext.contactWhatsapp}</a>
                    {/*<img src="../../images/whatsappIcon.svg" />*/}
                    <img className="w-4 h-auto" src="../images/Group 56-primary.svg" />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;