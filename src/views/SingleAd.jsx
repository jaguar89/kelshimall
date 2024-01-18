import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {fetchAdsByFilterParameter} from "../apiService.js";
import ContactUs from "../components/ContactUs.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import Spinner from "../components/Spinner.jsx";


function SingleAd(props) {
    const [currentAd, setCurrentAd] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAdsByFilterParameter({'postId': id, 'pageSize': 1});
                // console.log('Single Ad Data from api:', data);
                if (data.length === 0)
                    navigate('/404');
                setCurrentAd(data[0]);
            } catch (error) {
                // console.error('Error, SingleAd.jsx: ' + error);
                navigate('/404');
            }
        };

        fetchData();
    }, []);

    const formattedPrice = (price) => {
        //en-US - ar-EG
        return price.toLocaleString('ar-EG', {style: 'currency', currency: 'SYP'});
    };


    function renderBanner() {
        if (!currentAd) return;
        const imagesList = currentAd.ImagesList;
        return <ImageSlider addItem={currentAd} banners={imagesList} propertyName={"OriginalFileName"}/>
    }

    function formatDate(dateString) {
        if (!dateString) return '';
        const options = {day: '2-digit', month: '2-digit', year: 'numeric'};
        const formattedDate = new Date(dateString).toLocaleDateString('en-GB', options);
        return formattedDate;
    }

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('URL copied to clipboard!');
        } catch (err) {
            console.error('Unable to copy to clipboard.', err);
        }
    };

    return (

       !currentAd || Object.keys(currentAd).length === 0 ? (
            <Spinner />
        ) : (
            <>
                <div id="single_ad" dir={"rtl"} className="relative flex flex-col w-full pb-10">
                    <div
                        className="sticky z-50 top-0 left-0 right-0 flex flex-row justify-between bg-secondary p-2 md:p-10">
                        <div className="flex flex-col items-center gap-2">
                            <div className="flex flex-row gap-2 items-center">
                                <Link onClick={() => {
                                    navigate(-1)
                                }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="54.776" height="51.67"
                                         viewBox="0 0 54.776 51.67" className="w-6 h-6">
                                        <path id="Icon_ionic-md-arrow-round-back"
                                              data-name="Icon ionic-md-arrow-round-back"
                                              d="M10.373,27.184H43.684L30.764,14.825a5.149,5.149,0,0,1,0-7.036,4.6,4.6,0,0,1,6.724,0L59,28.647a4.741,4.741,0,0,1,1.4,3.487V32.2A4.741,4.741,0,0,1,59,35.683L37.5,56.541a4.6,4.6,0,0,1-6.724,0,5.149,5.149,0,0,1,0-7.036L43.7,37.146H10.388a4.873,4.873,0,0,1-4.763-4.981A4.821,4.821,0,0,1,10.373,27.184Z"
                                              transform="translate(-5.625 -6.33)"/>
                                    </svg>
                                </Link>
                                <div className="flex flex-col md:flex-row gap-2 items-center justify-center">
                                    <span>{currentAd.Price && formattedPrice(currentAd.Price)} </span>
                                    <span className="font-bold">/ {currentAd.Title ?? ''}</span>
                                </div>
                            </div>
                            <span>{currentAd.storeInfo?.Title}</span>
                        </div>

                        <div className="flex flex-col justify-end">
                            {currentAd.IsNegotiable && <span
                                className="bg-primary text-white px-4 py-2 font-bold md:text-md absolute top-0 left-10  rounded-bl-xl rounded-br-xl">منتفاوض</span>}
                            <button
                                onClick={copyToClipboard}
                                className="flex flex-row-reverse items-center gap-2 bg-white rounded-md text-primary text-md border border-[#273e7a] px-6 py-2 ">
                                <span className="text-xs md:text-md lg:text-lg">شارك الإعلان</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="28.645" height="32.524"
                                     viewBox="0 0 28.645 32.524" className="w-4 h-4 md:w-6 md:h-6">
                                    <path id="Icon_awesome-share-alt" data-name="Icon awesome-share-alt"
                                          d="M21.329,19.39a5.792,5.792,0,0,0-3.623,1.266L11.5,16.775a5.85,5.85,0,0,0,0-2.526l6.21-3.881A5.807,5.807,0,1,0,15.65,7.08L9.44,10.961a5.817,5.817,0,1,0,0,9.1l6.21,3.881a5.817,5.817,0,1,0,5.679-4.554Z"
                                          transform="translate(0.75 0.75)" fill="none" stroke="#273e7a"
                                          strokeWidth="1.5"/>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <div className="pt-2  ">
                        {renderBanner()}
                    </div>

                    {/* Ad details */}
                    <div className="mt-12 p-2 px-6 flex flex-col space-y-4">
                        <div className="flex flex-row items-center gap-2">
                            <span className="bg-customGray rounded-2xl p-2 text-white">{currentAd.Category}</span>
                            <span className="bg-customGray rounded-2xl p-2 text-white">{currentAd.SubCategory}</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="30.213" height="33.57"
                                 viewBox="0 0 30.213 33.57">
                                <path id="Icon_material-date-range" data-name="Icon material-date-range"
                                      d="M14.571,18.107H11.214v3.357h3.357Zm6.714,0H17.928v3.357h3.357Zm6.714,0H24.642v3.357H28Zm3.357-11.75H29.678V3H26.321V6.357H12.893V3H9.536V6.357H7.857a3.342,3.342,0,0,0-3.34,3.357L4.5,33.213A3.356,3.356,0,0,0,7.857,36.57h23.5a3.367,3.367,0,0,0,3.357-3.357V9.714A3.367,3.367,0,0,0,31.356,6.357Zm0,26.856H7.857V14.75h23.5Z"
                                      transform="translate(-4.5 -3)"/>
                            </svg>
                            <span>{formatDate(currentAd.PublicationDate)}</span>
                        </div>
                        <div className="flex flex-row items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" width="27.719" height="39.05"
                                 viewBox="0 0 27.719 39.05">
                                <path id="Icon_material-location-on" data-name="Icon material-location-on"
                                      d="M19.859,3A12.35,12.35,0,0,0,7.5,15.359c0,9.27,12.359,22.953,12.359,22.953S32.219,24.629,32.219,15.359A12.35,12.35,0,0,0,19.859,3Zm0,16.773a4.414,4.414,0,1,1,4.414-4.414A4.416,4.416,0,0,1,19.859,19.773Z"
                                      transform="translate(-6 -1.5)" fill="none" stroke="#000" strokeWidth="3"/>
                            </svg>
                            <span>{currentAd.City} / {currentAd.Area}</span>
                        </div>
                    </div>
                    <div className="p-10 flex flex-col gap-4 shadow-md">
                        <h1 className="text-xl font-bold">تفاصيل الإعلان</h1>

                        {
                            currentAd.Specifications?.map((item, index) => {
                                return (
                                    <div key={index}
                                         className={`flex flex-row gap-12 p-4 ${index % 2 === 0 ? ' bg-[#E4E4E4]' : ''} rounded-xl`}>
                                        <span>{item.Name}</span> <span> {item.Value}</span>
                                    </div>
                                )
                            })
                        }
                        <div
                            className={`flex flex-row gap-12 p-4  bg-[#E4E4E4] rounded-xl`}>
                            <span>الوصف</span> <span> {currentAd.Description}</span>
                        </div>
                    </div>

                    {/* Ad's owner and safety details */}
                    <div className="flex flex-col md:flex-row">
                        <div className="p-2 md:p-10 flex flex-col gap-4 shadow-md flex-1">
                            <h1 className="text-xl font-bold">صاحب الإعلان</h1>
                            <div
                                className="flex flex-row md:flex-col xl:flex-row gap-1 md:gap-4 items-center justify-evenly">
                                <Link to={`/stores/${currentAd.storeInfo?.Id}`}>
                                    {
                                        currentAd.storeInfo?.ProfilePicture === "" ? (
                                            <img className="w-36 h-36"
                                                 src="../images/logo-06.svg" alt=""/>
                                        ) : (
                                            <img className="w-36 h-36 object-cover rounded-full"
                                                 src={currentAd.storeInfo?.ProfilePicture} alt=""/>
                                        )
                                    }
                                </Link>
                                <div className="flex flex-col items-center justify-center">
                                    <Link to={`/stores/${currentAd.storeInfo?.Id}`}>
                                        <span className="font-bold text-md">{currentAd.storeInfo?.Title}</span>
                                    </Link>
                                    {
                                        currentAd.storeInfo?.StoreCategory?.map((cat, index) => (
                                            <span key={index}>{cat.NameAr}</span>
                                        ))
                                    }
                                </div>
                                <span
                                    className="flex flex-row-reverse items-center  gap-2 bg-white rounded-md text-primary text-md border border-[#273e7a] px-1 md:px-2 py-2 ">
                                 0{currentAd.storeInfo?.MobileNumber}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26.073" height="26.074"
                                         viewBox="0 0 26.073 26.074" className="w-4 h-4">
                                    <g id="Group_6566" data-name="Group 6566" transform="translate(-356.527 -938.962)">
                                        <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt"
                                              d="M23.365,17,18.1,14.741a1.127,1.127,0,0,0-1.315.324l-2.33,2.847A17.412,17.412,0,0,1,6.135,9.588l2.847-2.33a1.125,1.125,0,0,0,.324-1.315L7.051.682A1.135,1.135,0,0,0,5.759.029L.874,1.156A1.127,1.127,0,0,0,0,2.255a21.794,21.794,0,0,0,21.8,21.8,1.127,1.127,0,0,0,1.1-.874l1.127-4.885A1.141,1.141,0,0,0,23.365,17Z"
                                              transform="translate(357.527 939.984)" fill="none" stroke="#273e7a"
                                              strokeWidth="2"/>
                                    </g>
                                </svg>

                            </span>
                            </div>
                        </div>
                        <div className="p-2 pt-10 md:p-10 flex flex-col gap-4 shadow-md flex-1 justify-between">
                            <h1 className="text-xl font-bold">تفاصيل حول السلامة</h1>
                            <div className="flex flex-row gap-1 items-center justify-evenly">
                                <ul className="font-bold text-sm">
                                    <li className="p-2">* تجنب لقاء الشخص في مكان مجهول</li>
                                    <li>* لا تقم بإرسال المال مسبقاً</li>
                                </ul>
                                <button
                                    className="flex flex-row-reverse items-center gap-2 bg-white rounded-md text-[#FF5E00] text-md border border-[#FF5E00] p-1 lg:px-6 lg:py-2"
                                    onClick={() => navigate('/send-complaint')}>
                                    بلغ عن إساءة
                                </button>
                            </div>
                            <span>ID {currentAd.PostId}</span>
                        </div>
                    </div>

                </div>

                <ContactUs/>
            </>
        )
    );
}

export default SingleAd;