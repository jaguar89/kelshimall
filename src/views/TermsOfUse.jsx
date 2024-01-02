import React from 'react';
import {useHomeContext} from "../contexts/ContextProvider.jsx";
import ContactUs from "../components/ContactUs.jsx";

function TermsOfUse(props) {
    const homeContext = useHomeContext();
    return (
        homeContext.policyText === "" ?  <div dir={'rtl'} className="mx-auto text-center">جاري التحميل ...</div> :
       <>
           <div dir={'rtl'} className="p-10 px-20 my-10 mx-4 flex flex-col items-center shadow-xl border border-gray-200 rounded-xl">
               <h1 className="text-3xl text-center border-dashed border-b-4  py-4 mb-10">شروط الإستخدام</h1>
               <p className="text-xl leading-10 font-medium">
                   {homeContext.policyText}
               </p>
           </div>
           <ContactUs/>
       </>
    );
}

export default TermsOfUse;