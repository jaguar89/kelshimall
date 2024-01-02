import React from 'react';
import {useHomeContext} from "../contexts/ContextProvider.jsx";

function ContactUs(props) {
    const homeContext = useHomeContext();

    return (
        <div className="w-full flex flex-col items-center justify-center bg-secondary gap-12 p-10 mt-0">
            <h1 className="text-btn_primary text-3xl font-bold text-center">لمزيد من النصائح والمعلومات تواصل معنا على</h1>
            <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex flex-row items-center gap-1 gap-4 px-6 md:border-r-2 md:border-gray-300 md:pr-14">
                    <span>{homeContext.contactNumber}</span>
                    <img src="../../images/phoneIcon.svg" />
                </div>
                <div className="flex flex-row items-center gap-1 gap-4 px-6">
                    <span>{homeContext.contactWhatsapp}</span>
                    <img src="../../images/whatsappIcon.svg" />
                </div>
            </div>
        </div>
    );
}

export default ContactUs;