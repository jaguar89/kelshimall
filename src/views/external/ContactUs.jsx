import React from 'react';
import {Link} from "react-router-dom";
import config from "../../config.json";

const ContactUs = () => {

    return (
        <div dir={'rtl'} className="flex flex-col items-center py-6">

            <div className="self-start flex flex-row gap-4 items-center p-4">
                <Link onClick={() => {
                    navigate(-1)
                }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="54.776" height="51.67"
                         viewBox="0 0 54.776 51.67" className="w-4 h-auto fill-primary pt-2">
                        <path id="Icon_ionic-md-arrow-round-back"
                              data-name="Icon ionic-md-arrow-round-back"
                              d="M10.373,27.184H43.684L30.764,14.825a5.149,5.149,0,0,1,0-7.036,4.6,4.6,0,0,1,6.724,0L59,28.647a4.741,4.741,0,0,1,1.4,3.487V32.2A4.741,4.741,0,0,1,59,35.683L37.5,56.541a4.6,4.6,0,0,1-6.724,0,5.149,5.149,0,0,1,0-7.036L43.7,37.146H10.388a4.873,4.873,0,0,1-4.763-4.981A4.821,4.821,0,0,1,10.373,27.184Z"
                              transform="translate(-5.625 -6.33)"/>
                    </svg>
                </Link>
                <h1 className="text-xl font-bold text-primary">تواصل معنا</h1>
            </div>

            <div className="bg-gray-100 w-full p-10 flex items-center justify-center">
                <div className=" border-b-2 border-primary">
                    <p className="text-xl text-primary font-bold tracking-wide">أرسل شكوى أو استفسارك الآن</p>
                </div>
            </div>

            <div dir={'ltr'}  className="text-gray-700 font-bold flex flex-col items-center p-6 gap-8">
               <div className="flex flex-col items-center gap-2">
                   <p>أو</p>
                   <p>تواصل معنا هاتفياً عبر الرقم التالي</p>
                   <div className="flex flex-row-reverse items-center gap-4 px-6 md:border-r-2 md:border-gray-300 md:pr-14">
                       <span>+961 11 403357</span>
                       <img className="w-6 h-auto" src="../../images/phoneIcon.svg" />
                   </div>
               </div>

              <div className="flex flex-col items-center gap-1">
                  <p>أو على الرقم التالي</p>
                  <div className="flex flex-row-reverse items-center  gap-6 px-6">
                      <span>+961 3 419338</span>
                      <img className="w-4 h-auto" src="../images/Group 56-primary.svg" />
                  </div>
              </div>
            </div>

            <div dir={'ltr'} className="mt-10 mb-6 flex flex-col items-center">
                <Link to={'/'} id="logo" className="md:pr-4">
                    <img className="w-32 lg:w-40 h-auto" src={config.logo} alt=""/>
                </Link>
                <p className="text-sm font-bold text-primary">Copyright @ 2024 Kelshi mall. All rights reserved.</p>
            </div>
        </div>
    );
};

export default ContactUs;