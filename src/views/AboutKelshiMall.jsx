import React from 'react';
import ContactUs from "../components/ContactUs.jsx";

function AboutKelshiMall(props) {
    return (
        <>
            <div dir={'rtl'} className="flex flex-col gap-0 bg-gray-50">
                <span className="pr-10 pt-10 text-xl text-blue-900 font-bold">&laquo;حول كلشي مول&raquo;</span>
                <div id="back" className="w-full h-auto">

                    <div id="front" className="flex flex-col gap-0 w-full h-auto items-center  mt-8 py-0">
                            <img className="w-[80%] h-auto" src="../../images/Group 6500.png"/>


                        <div className="flex flex-col gap-20 py-10 px-10 md:px-24  mt-6">
                            <div className="text-white flex flex-col gap-8">
                                <h1 className="mb-16 lg:mt-16 text-4xl font-bold text-btn_primary ">ماهو الهدف من مشروع كلشي مول؟</h1>
                                <p className="text-xl  leading-10">مشروع كلشي مول هو عبارة عن سوق الكتروني يسمح للمستخدمين ببيع أي شيء بطريقة سلسة و سهلة من
                                    خلال الموقع الإلكتروني او التطبيق على اندرويد و أيفون
                                </p>
                                <p className="text-xl  leading-10">الهدف من المشروع هو خلق واجهة الكترونية سهلة التعامل, حيث يستطيع المستخدم الإعلان عن
                                    بضاعته او الأشياء المراد بيعها و التوصّل الى اكثر شريحة ممكنة قد تهتم </p>
                                <p className="text-xl  leading-10">ويقوم كلشي مول بالمساعدة في التسويق بخلق منصة تساعدك على العمل وزيادة في ربحية عملك ضمن
                                    ابسط الامور والوسائل ، تقدم كلشي مول الكثير من الخدمات لخلق صلة الوصل بين الشاري
                                    والبائع</p>

                            </div>
                            <div className="text-white flex flex-col gap-8 pb-6">
                                <h1 className="text-4xl font-bold text-btn_primary">من المستفيد من تطبيق كلشي مول؟</h1>
                                <p className="text-xl  leading-10">المستخدمين المستفيدين من كلشي مول ( اصحاب المحلات التجارية – اصحاب المهن اليدوية – من
                                    يقوم بالبيع ضمن المنزل – بيع اغراض قديمة لدى المستخدم لم يعد بحاجة إليه – اعلان عن خدمات
                                    تستطيع ان تقدمها .... )المطلوب منك كاميرا بسيطة تعطيك صورة واضحة لتسطيع بسهولة ان تعرض
                                    منتجاتك في كلشي مول </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactUs/>
        </>
    );
}

export default AboutKelshiMall;