import React from 'react';
import ContactUs from "../components/ContactUs.jsx";

function SellerTips(props) {
    return (
        <>
            <div dir={'rtl'} className="flex flex-col gap-0 ">

                <div className="px-10 flex flex-col space-y-12">
                    <span
                        className="pt-10 text-md md:text-xl text-blue-900 font-bold">&laquo;نصائح للبائع&raquo;</span>
                    <h1 className="text-2xl md:text-3xl font-bold text-btn_primary ">كيف أحصل على أكبر عدد من المشترين
                        ؟</h1>
                    <p className="text-primary text-md md:text-xl font-normal">هناك العديد من العناصر التي تؤثر على سرعة
                        بيع السلعة / الغرض الذي تملكه سوف نقوم بتزويدك ببعض النصائح التي ستساعدك على جذب أكبر عدد من
                        الأشخاص المهتمين بإعلانك
                    </p>


                    <div
                        className="w-full flex flex-row flex-wrap items-center justify-around gap-10 sm:gap-1 pt-10 pb-10 md:pb-20">

                        <div className="py-4 px-1 flex flex-col lg:flex-row gap-2 items-center bg-gray-200 w-full sm:w-[40%] sm:mb-44 rounded-xl z-50 relative">
                            <img className="hidden sm:block absolute bottom-0 z-10  translate-y-[100%] -translate-x-[50%]" src="../../images/line1.svg"/>
                            <span className=" text-5xl md:text-6xl font-bold text-primary">1</span>
                           <div className="flex flex-col items-center justify-center ">
                               <img className="w-6 h-6" src="../../images/storeIcon.svg"/>
                               <h2 className="text-btn_primary px-2 text-xl font-bold text-center">متجرك الخاص</h2>
                           </div>
                             <p className="p-4 border-t-2 lg:border-t-0 lg:border-r-2 border-gray-400">عدل معلومات حسابك الى
                                معلومات متجرك الخاص</p>
                        </div>

                        <div className="py-4 px-1 flex flex-col lg:flex-row gap-2 items-center bg-gray-200 w-full sm:w-[40%] sm:mt-6 rounded-xl z-50 relative">
                            <img className="hidden sm:block absolute bottom-0 z-10  translate-y-[85%] translate-x-[50%] md:translate-x-[70%]" src="../../images/line2.svg"/>
                            <span className=" text-5xl md:text-6xl font-bold text-primary">2</span>
                            <div className="flex flex-col items-center justify-center">
                                <img className="w-6 h-6" src="../../images/cameraIcon.svg"/>
                                <h2 className="text-btn_primary px-2 text-xl font-bold text-center">الصور</h2>
                            </div>
                            <p className="p-4 border-t-2 lg:border-t-0 lg:border-r-2 border-gray-400">اجعل الاعلان الخاص بك أكثر جاذبية بإضافة صور
                                لإعلانك. احرص على إضافة صور واضح ,
                                حقيقية , ذات صلة بالسلعة التي تود بيعها </p>
                        </div>

                        <div className="py-4 px-1 flex flex-col lg:flex-row gap-2 items-center bg-gray-200 w-full sm:w-[40%] sm:mb-72 md:mb-56 lg:mb-40 rounded-xl z-50 relative">
                            <img className="hidden sm:block absolute bottom-0 z-10  translate-y-[100%] -translate-x-[40%] md:-translate-x-[60%]" src="../../images/line3.svg"/>
                            <span className=" text-5xl md:text-6xl font-bold text-primary">3</span>
                            <div className="flex flex-col items-center justify-center ">
                                <img className="w-8 h-8" src="../../images/descIcon.svg"/>
                                <h2 className="text-btn_primary px-2 text-xl font-bold text-center">خانة الوصف</h2>
                            </div>
                            <p className="p-4 border-t-2 lg:border-t-0 lg:border-r-2 border-gray-400">إحرص على كتابة وصف واف وشرح بسيط  عن السلعة التي تمكلها مثل الحجم ،
                                اللون ، الأبعاد ، من أين حصلت على الغرض أو سبب البيع.
                            </p>
                        </div>

                        <div className="py-4 px-1 flex flex-col lg:flex-row gap-2 items-center bg-gray-200 w-full sm:w-[40%] sm:mt-52 rounded-xl z-50 relative">
                            <img className="hidden sm:block absolute bottom-0 z-10  translate-y-[71%] translate-x-[70%]" src="../../images/line4.svg"/>
                            <span className=" text-5xl md:text-6xl font-bold text-primary">4</span>
                            <div className="flex flex-col items-center justify-center">
                                <img className="w-8 h-8" src="../../images/walletIcon.svg"/>
                                <h2 className="text-btn_primary px-2 text-xl font-bold text-center">السعر</h2>
                            </div>
                            <p className="p-4 border-t-2 lg:border-t-0 lg:border-r-2 border-gray-400">من الممكن أن يكون السعر الذي تطلبه بالغرض المراد بيعه مرتفع بعض الشيء , حاول أن تقارن السعر الخاص بالسلعة بالإعلانات الأخرى المماثلة على الموقع . إذا كان السعر الذي تود عرضه مرتفع بشكل كبير فنحن ننصحك بمحاولة وضع سعر أقل مما يجذب عدد أكبر من المستخدمين المهتمين بإعلانك.
                            </p>
                        </div>

                        <div className="py-4 px-1 flex flex-col lg:flex-row gap-2 items-center bg-gray-200 w-full sm:w-1/2 sm:mt-20 md:mt-28 rounded-xl z-50 relative sm:ml-44">
                            <span className=" text-5xl md:text-6xl font-bold text-primary">5</span>
                            <div className="flex flex-col items-center justify-center">
                                <img className="w-8 h-8" src="../../images/walletIcon.svg"/>
                                <h2 className="text-btn_primary px-2 text-xl font-bold text-center">رقم الهاتف</h2>
                            </div>
                            <p className="p-4 border-t-2 lg:border-t-0 lg:border-r-2 border-gray-400">تأكد من أن رقم الهاتف ظاهر في الإعلان الخاص بك وليس مخفي حيث أن معظم المستخدمبن يفضلون التواصل مع المعلن مباشرة عن طريق الهاتف.
                                لا تقلق فنحن لا نفصح عن المعلومات الخاصة بالمعلنين في حال عدم رغبة المعلن بإظهار رقم هاتفه للتواصل , في تلك الحالة فإن الوسيلة الوحيدة للتواصل  ستكون من خلال البريد الالكتروني بالضغط على " أرسل رد " .
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <ContactUs/>
        </>
    );
}

export default SellerTips;