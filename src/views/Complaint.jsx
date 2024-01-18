import React, {useState} from 'react';
import ContactUs from "../components/ContactUs.jsx";
import {Link, useNavigate} from "react-router-dom";
import {sendComplaint} from "../apiService.js";

function Complaint(props) {
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
        if(result)
            navigate('/');
    }

    return (
        <>
            <div dir={'rtl'} className="p-10 pr-28 flex flex-col gap-10">
                <div className="flex flex-row items-center gap-2">
                    <Link to={'/'} className="text-blue-900 font-bold">الرئيسية</Link> &raquo;
                    <span className="text-blue-900 font-bold">بلغ عن اساءة</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <img className="w-16 h-16 mx-auto" src={'../../images/alert-circle.svg'}/>
                    <span className="text-red-700">بلغ عن اساءة</span>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                            <span className="border-r-2 border-gray-300 pr-2">+963</span>
                            <input type="text" id="mobile" name="mobile"
                                   value={mobile}
                                   onChange={(e) => setMobile(e.currentTarget.value)}
                                   placeholder="999 123456"
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
                                className="px-6 bg-primary text-white rounded-md py-2 text-md font-bold">أرسل
                        </button>
                    </div>
                </form>


            </div>

            <ContactUs/>
        </>
    );
}

export default Complaint;