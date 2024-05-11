import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import config from "../../config.json";
import {sendComplaint} from "../../apiService.js";

const ContactUs = () => {
    const [type, setType] = useState('خطأ في الصورة/السعر/الفئة');
    const [isOther, setIsOther] = useState(false);

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [otherCause, setOtherCause] = useState('');

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const value = e.currentTarget.value;
        setType(value);
        if (value === 'سبب آخر') {
            setIsOther(true)
        } else {
            setIsOther(false);
            setOtherCause('');
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const result = await sendComplaint({
            "Name": name,
            "MobileNumber": mobile,
            "Title": type,
            "Body": type + " - " + otherCause
        });

        // console.log("result is : ", result);
        if(result){
            alert('تم إرسال الشكوى للإدارة, سيتم التواصل معك بأقرب وقت.')
            navigate('/');
        }
    }
    return (
        <div dir={'rtl'} className="flex flex-col items-center py-6">

            <div className="self-start flex flex-row gap-4 items-center p-4">
                <Link onClick={() => {
                    navigate('/')
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

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4 py-16">
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">الإسم</label>
                    <input type="text" id="name" name="name"
                           value={name}
                           onChange={(e) => setName(e.currentTarget.value)}
                           className="border border-gray-300 focus:outline-none rounded-md p-2 bg-secondary"/>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="mobile">رقم الموبايل</label>
                    <div dir={'ltr'}
                         className="flex flex-row gap-2 p-2 bg-secondary rounded-md  border border-gray-300">

                        <input type="text" id="mobile" name="mobile"
                               value={mobile}
                               onChange={(e) => setMobile(e.currentTarget.value)}
                               placeholder=""
                               className="w-full border-none outline-none p-0 focus:outline-none bg-transparent"/>

                    </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label>نوع التبليغ</label>
                    <select
                        name="type"
                        className="border border-gray-300 focus:outline-none rounded-md p-2 bg-secondary "
                        value={type}
                        onChange={handleOnChange}
                    >
                        <option value="خطأ في الصورة/السعر/الفئة">خطأ في الصورة/السعر/الفئة</option>
                        <option value="إعلان غير لائق">إعلان غير لائق</option>
                        <option value="بائع غير لائق">بائع غير لائق</option>
                        <option value="تم بيع السلعة">تم بيع السلعة</option>
                        <option value="نصب و احتيال">نصب و احتيال</option>
                        <option value="سبب آخر">سبب آخر</option>
                    </select>
                </div>

                {isOther && <div className="flex flex-col gap-2">
                    <label htmlFor="cause">يرجى ذكر السبب</label>
                    <textarea id="cause" name="cause"
                              value={otherCause}
                              onChange={(e) => setOtherCause(e.currentTarget.value)}
                              className="border border-gray-300 focus:outline-none rounded-md p-2 bg-secondary"></textarea>
                </div>}

                {/*<div  className="flex flex-col gap-2">*/}
                {/*    <label htmlFor="image">رفع صورة</label>*/}
                {/*    <input type="file" id="image" name="image"*/}
                {/*           onChange={(e)=>setImage(e.currentTarget.files[0])}*/}
                {/*           className="border border-gray-300 focus:outline-none rounded-md p-2 bg-secondary"/>*/}
                {/*</div>*/}
                <div className="flex items-center justify-center mt-8">
                    <button type="submit"
                            className="px-6 bg-[#273E7A] text-white rounded-md py-2 text-md font-bold">أرسل
                    </button>
                </div>
            </form>






            <div dir={'ltr'}  className="text-gray-700 font-bold flex flex-col items-center p-6 gap-8">
               <div className="flex flex-col items-center gap-2">
                   <p>أو</p>
                   <p>تواصل معنا هاتفياً عبر الرقم التالي</p>
                   <div className="flex flex-row-reverse items-center gap-4 px-6 md:border-r-2 md:border-gray-300 md:pr-14">
                       <a href="tel:+96111403357">+961 11 403357</a>
                       <img className="w-6 h-auto" src="../../images/phoneIcon.svg" />
                   </div>
               </div>

              <div className="flex flex-col items-center gap-1">
                  <p>أو على الرقم التالي</p>
                  <div className="flex flex-row-reverse items-center  gap-6 px-6">
                      <a href="tel:+9613419338">+961 3 419338</a>
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