import React from 'react';
import ContactUs from "../components/ContactUs.jsx";

function BannedAds(props) {
    return (
        <>
            <div dir={'rtl'} className="flex flex-col gap-0 ">
                <div className="px-10 flex flex-col space-y-8">
                    <span className="pt-10 text-md md:text-xl text-blue-900 font-bold">&laquo;الإعلانات الممنوعة&raquo;</span>
                    <h1 className="text-2xl md:text-3xl font-bold text-btn_primary ">ما هي الإعلانات الممنوعة على كلشي مول ؟</h1>
                    <p className="text-primary text-md md:text-xl font-normal">نحن في كلشي مول نحاول الحفاظ على تجربة آمنة و سهله
                        لكلا الطرفين البائع و المشتري
                    </p>
                </div>

                <div className="w-full flex flex-col items-center gap-8 p-6 md:p-20 pb-16">
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 pb-10 md:pb-20">
                        <div className="relative bg-secondary p-10 rounded-md">
                            <p className="text-red-600 text-md font-bold text-center">كل الكلمات المخلة بالآداب
                                ممنوعة</p>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">1</span>
                        </div>

                        <div className="relative bg-secondary p-10 rounded-md">
                            <p className="text-red-600 text-md font-bold text-center">كل الأغراض التي قد تؤدي إلى ضرر
                                مباشر أوغير مباشر ممنوعة
                            </p>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">2</span>
                        </div>

                        <div className="relative bg-secondary p-10 rounded-md">
                            <p className="text-red-600 text-md font-bold text-center"> جميع الإعلانات دون صورة
                            </p>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">3</span>
                        </div>

                        <div className="relative bg-secondary p-10 rounded-md">
                            <p className="text-red-600 text-md font-bold text-center">كل الأغراض بدون أوراق إثبات ملكية
                                (إذا كان ضرورياً وجودها) ممنوعة
                            </p>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">4</span>
                        </div>
                    </div>

                    <div className="w-full flex flex-col py-6 space-y-8 bg-gray-50 rounded-md">
                        <h2 className="text-red-600 text-xl md:text-2xl font-bold text-center">على سبيل المثال وليس للحصر</h2>
                        <div className="flex flex-col lg:flex-row p-2 items-start justify-evenly gap-8">
                            <ul className="list-disc list-inside">
                                <li>سماعات البلوتوث الصغيرة (للتجسس)
                                </li>
                                <li>عقارات ، سيارات او دراجات نارية بدون اوراق اثبات ملكية</li>
                                <li>أجهزة تكبير أو تصغير أعضاء الجسم
                                </li>
                                <li>المواد والاجهزة الطبية</li>
                                <li>أجهزة الاستخدام الشخصي
                                </li>
                                <li>العقاقير و الأدوية والمكملات الغذائية
                                </li>
                                <li>الكاميرات الصغيرة (للتجسس)
                                </li>
                                <li>جميع الكلمات التى ممكن ان تنقسم فتصبح كلمه خارجه / غير لائقه
                                </li>
                                <li>بيع او شراء قواعد بيانات عملاء</li>
                                <li>الأسلحة بجميع أنواعها
                                </li>
                                <li>أجهزة الليزر
                                </li>
                            </ul>
                            <ul className="list-disc list-inside">
                                <li>الكفالات والإقامة
                                </li>
                                <li>تأشيرات سفر</li>
                                <li>الملفات الرسمية
                                </li>
                                <li>أيفون مقفل بالايكلاود
                                </li>
                                <li>تجارة الاعضاء
                                </li>
                                <li>أجهزة كشف المعادن
                                </li>
                                <li>الألعاب النارية
                                </li>
                                <li>أجهزة الدفاع عن النفس
                                </li>
                                <li>المواد المنتهية الصلاحية</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full flex flex-col px-2 md:px-28 py-6 space-y-8 bg-gray-50 rounded-md items-start">
                        <img className="w-80 h-auto self-center" src="../../images/Group 5211.png"/>
                        <p className="font-bold text-md md:text-xl leading-10">للأسف تم رفض إعلانك لأنه لا يتماشى مع واحد أو أكثر من قوانين النشر
                            على كلشي مول، التي من شأنها أن تضمن تجربة بيع وشراء سهلة وسريعة وآمنة للمستخدمين
                        </p>
                        <p className="font-bold text-md md:text-xl leading-10">
                            إذا تم حذف إعلان (أو أكثر) من إعلاناتك لأي سبب من الأسباب التالية، يرجى العودة لصفحة إعلاناتك المرفوضة والتعديل ثم إعادة محاولة النشر
                        </p>
                        <h3 className="text-red-600 text-md md:text-xl font-bold underline  self-center">قد يتم رفض إعلانك لأحد الأسباب التالية :</h3>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:الإعلانات المكررة</h4>
                            <p>يجب ألا يكون إعلانك مكررًا، فلا تعيد نشر إعلاناتك حيث يمكنك نشر إعلان عن سلعة  مرة واحدة فقط</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:إعلان واحد وسلع متعددة</h4>
                            <p> يتم رفض إعلانك إذا تضمن الإعلان الواحد أكثر من سلعة واحدة فقط، فإذا كان لديك أكثر من منتج، يرجى نشر إعلان مستقل لكل منتج</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:سعر غير منطقي</h4>
                            <p>يتم رفض إعلانك إذا قمت بنشر سعر غير منطقي لمنتجك، ولا يتماشى مع أسعار السوق المتعارف عليها، أو إذا نسيت كتابة صفر أو أكثر بالخطأ (على سبيل المثال 60 بدلًا من 60000).</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:وصف سيء</h4>
                            <p>اذا كان وصف المنتج غير واضح وغير وافي للمشترين كما ينبغي أن يكون، أو إذا كان بلغة أخرى غير العربية أو الإنجليزية، يعتبر ذلك وصفًا سيئًا ويتم رفض الإعلان على كلشي مول.  أيضًا تجنب أن يتضمن الوصف رقم المحمول أو بيانات شخصية مختلفة عن الموجودة في خانة رقم الموبايل وخانات البيانات الشخصية. وبالتأكيد لا ينبغي أن يتضمن الوصف أي عبارات مسيئة تتعارض مع الآداب العامة</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:الصور</h4>
                            <p>يجب أن تكون الصور حقيقية من أرض الواقع، ويمنع منعاً باتاً نشر صور منقولة عن الإنترنت لاتعكس حقيقة المنتج ، تأكد أن الصورة تم التقاطها ونشرها في الوضع السليم، وأنها لا تتضمن روابط لمواقع اخرى أو عنوان بريد الكتروني أو أسعار أو شعار (لوجو) لأي علامة تجارية أو موقع آخر. كما يجب أن تتوافق الصور المنشورة على كلشي مول مع النظام والآداب العامة. وإذا كنت تعرض عقارًا، عليك نشر صور من داخل العقار،رجاءً عدم نشر صور منقولة من إعلان آخر</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:إعلان ليس له فئة</h4>
                            <p>لن نتمكن من نشر إعلانك إذ لم يكن منتجك له فئة على كلشي مول
                            </p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:ايميل /روابط</h4>
                            <p>لا يجب أن يتضمن عنوان الإعلان أو الوصف أي عناوين بريد الكتروني (ايميل) أو روابط، حيث أننا نسعى دائمًا لتوفير بيئة آمنة للبيع والشراء بين المستخدمين، وبالتالي لا نقبل النشر خارج حدود موقعنا</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-md font-bold">:منتج غير قانوني </h4>
                            <p>جميع المواد الاخرى التي يمنع القانون السوري تداولها. وفي حال صدور قانون يمنع تداول منتج ما فإن لهذا القانون مفعول رجعي على الصفحة حيث ستقوم ادارة الموقع بحذف الاعلان
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            <ContactUs/>
        </>
    );
}

export default BannedAds;