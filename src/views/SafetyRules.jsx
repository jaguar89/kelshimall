import React from 'react';
import ContactUs from "../components/ContactUs.jsx";

function SafetyRules(props) {
    return (
        <>
            <div dir={'rtl'} className="flex flex-col gap-0 ">

                <div className="px-10 flex flex-col space-y-12">
                    <span
                        className="pt-10 text-md md:text-xl text-blue-900 font-bold">&laquo;قواعد السلامة&raquo;</span>
                    <h1 className="text-2xl md:text-3xl font-bold text-btn_primary ">عملائنا الأعزاء</h1>
                    <p className="text-primary text-md md:text-xl font-normal">يرجى قراءة قواعد السلامة الآتية لتتمكّن
                        من استخدام موقعنا بأمان
                    </p>


                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 pt-10 pb-10 md:pb-20">
                        <div className="relative bg-secondary p-10 rounded-md flex flex-col gap-6 items-center">
                            <h2 className="text-btn_primary text-xl font-bold text-center">كيف يمكنني إتمام عملية البيع
                                بأمان ؟</h2>
                            <ul className="list-disc list-inside leading-10">
                                <li>يرجى عدم إضافة عنوان إيميلك داخل الوصف وذلك لحماية خصوصيتك
                                </li>
                                <li>
                                    لا تُشارك أبداً معلوماتك أو بياناتك شخصية، وتحديداً تلك المتعلّقة بحسابك المصرفي
                                </li>
                                <li> اتّفق مع المشتري على استخدام وسائل الدفع المألوفة والسهلة، ونحن نُفضّل الدفع نقداً
                                </li>
                                <li>في حال استمرّ المشتري في تغيير مكان اللقاء أو يُهاتفك من رقم مختلف في كلّ مرة، تجنّب
                                    التعامل معه
                                </li>
                                <li>أعلم المشتري بأي عيوب في السلعة، وذلك تجنباً لأن يتهمك بالخداع
                                </li>
                                <li>العقاقير و الأدوية والمكملات الغذائية
                                </li>
                                <li>حرصاً منّا على سلامتك، إذا بقي المشتري جالساً في سيارته، يُفضّل أن تطلب منه أن يترجل
                                    لتفقد السلعة في مكان اللقاء
                                </li>
                            </ul>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">1</span>
                        </div>

                        <div className="relative bg-secondary p-10 rounded-md flex flex-col gap-6 items-center">
                            <h2 className="text-btn_primary text-xl font-bold text-center">كيف يمكنني إتمام عملية الشراء
                                بأمان ؟
                            </h2>
                            <ul className="list-disc list-inside leading-10">
                                <li>تفقّد السلعة قبل إتمام الصفقة، إذ تتمكن بهذه الطريقة من تجنب الغش والاحتيال. ينطبق
                                    هذا أيضاً على استئجار الوحدات السكنية
                                </li>
                                <li>
                                    إحرص على لقاء البائع في مناطق آمنة على غرار مطعم أو مراكز التسوق أو أي مكان عام
                                </li>
                                <li>لا تقع في فخ الأسعار الأدنى مما هي في العادة. قارن الأسعار المعروضة مع الأسعار
                                    الموجودة في السوق
                                </li>
                                <li>لا تتعامل مع البائعين الذين يصرّون على معرفة معلومات شخصية عنك، مثلاً عمرك وحسابك
                                    المصرفي
                                </li>
                                <li>لا ترسل أبداً دفعة جزئية أو كاملة مسبقاً، قبل استلام سلعتك
                                </li>
                                <li>ثق بحدسك واحذر العروض غير الواقعية، مثلاً إن لاحظت أنّ الصفقة مغرية جداً، فعلى
                                    الأرجح أنّها عبارة عن محاولة احتيال
                                </li>
                                <li>وتذكّر هذه القاعدة الذهبية، إحرص على إتمام الصفقة وجهاً إلى وجه مع البائع
                                </li>
                            </ul>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">2</span>
                        </div>

                        <div className="relative bg-secondary p-10 rounded-md flex flex-col gap-6 items-center">
                            <h2 className="text-btn_primary text-xl font-bold text-center">كيف يمكنني الحفاظ على أمان حسابي
                                على كلشي مول؟
                            </h2>
                            <ul className="list-disc list-inside leading-10">
                                <li>لا تُشارك معلومات تسجيل الدخول إلى حسابك مع أحد. إختر كلمة سرّ صعبة، تتألّف من 6 حروف وأرقام وعلامات ترقيم على الأقلّ
                                    لضمان حمايتك، لا تختر ميزة حفظ كلمة السر في متصفح الويب. إذا لاحظت أنّ أحداً يعرف كلمة السر الخاصة بك، سارع إلى تغييرها.
                                </li>
                                <li>
                                    تنبّه إن كان سعر السلعة منخفضاً للغاية مقارنة بسعرها المعروض في السوق
                                </li>
                                <li>تجنّب التعامل مع بائع/مشتري يرفض إتمام الصفقة وجهاً إلى وجه أو الدفع عند الاستلام
                                </li>
                                <li>إبق متيقظاً عند التعامل مع مستخدم أنشأ حسابه مؤخراً على كلشي مول
                                </li>
                            </ul>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">3</span>
                        </div>

                        <div className="relative bg-secondary p-10 rounded-md flex flex-col gap-6 items-center">
                            <h2 className="text-btn_primary text-xl font-bold text-center">ماذا يجب أن أفعل في حال شككت
                                بمصداقية إعلان أحد المستخدمين؟
                            </h2>
                            <ul className="list-disc list-inside leading-10">
                                <li>يرجى التواصل معنا فوراً، في حال شككت بمصداقية إعلان أحد المستخدمين على كلشي مول. بالإضافة إلى ذلك، نحثّك على التوجه إلى الشرطة إن وقعت في فخ الاحتيال. نحن مستعدون لتزويد الشرطة بأي معلومات تخدم التحقيق، بناءً على طلب رسمي منهم. سارع إلى تعبئة طلب لنتمكن من إيقاف حساب الشخص بعد القيام بالتحرّيات اللازمة
                                </li>
                            </ul>
                            <span
                                className="absolute top-0 right-0 -translate-y-[50%] translate-x-[30%] text-5xl md:text-6xl font-bold text-primary">4</span>
                        </div>
                    </div>

                </div>
            </div>
            <ContactUs/>
        </>

    );
}

export default SafetyRules;