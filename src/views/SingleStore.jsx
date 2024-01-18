import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {fetchStoresByFilterParameter} from "../apiService.js";
import {useHomeContext} from "../contexts/ContextProvider.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Ads from "../components/Ads.jsx";
import ContactUs from "../components/ContactUs.jsx";
import ImageSlider from "../components/ImageSlider.jsx";
import config from '../config.json';
import Spinner from "../components/Spinner.jsx";

function SingleStore(props) {
    const homeContext = useHomeContext();
    const {id} = useParams();
    const [currentStore, setCurrentStore] = useState(homeContext.stores.length !== 0 ?
        homeContext.stores.filter(store => store['Id'] === parseInt(id))[0]
        : {});
    const [showMobileNumber, setShowMobileNumber] = useState(false);
    const [page, setPage] = useState(0);
    const navigate = useNavigate();

    function renderBanner() {
        const banners = currentStore.BackGroundPictures.length === 0 ? [config.store_default_cover] : currentStore.BackGroundPictures;

        return <ImageSlider banners={banners} indicators={false}/>
    }

    const copyCurrentLinkToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('URL copied to clipboard!');
        } catch (err) {
            console.error('Unable to copy to clipboard.', err);
        }
    };

    const copyStoreLinkToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(currentStore.StoreLink);
            alert('URL copied to clipboard!');
        } catch (err) {
            console.error('Unable to copy to clipboard.', err);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchStoresByFilterParameter({'storeId': id, 'pageSize': 1});
                // console.log('Single Store Data from api:', data);
                if (data.length === 0)
                    navigate('/404');
                setCurrentStore(data[0]);
            } catch (error) {
                // console.error('Error, SingleStore.jsx: ' + error);
                navigate('/404');
            }
        };

        fetchData();

    }, [id]);

    return (
        !currentStore || Object.keys(currentStore).length === 0 ?
            <Spinner/>
            :
            <>
                <div id="single_ad" dir={"rtl"} className="flex flex-col w-full mt-0">

                    {renderBanner()}

                    <div className="flex flex-col xl:flex-row gap-0 w-full relative  lg:pr-14">
                        <div
                            className="hidden xl:flex z-50 w-48 h-48 relative rounded-full transform -translate-y-[50%]">
                            {
                                currentStore.ProfilePicture === "" ? (
                                    <img className="w-36 h-36 mx-auto mt-6  object-fit bg-white rounded-full z-10"
                                         src="../images/logo-06.svg" alt=""/>
                                ) : (
                                    <img className="w-36 h-36  mx-auto mt-6  object-cover rounded-full z-10"
                                         src={currentStore.ProfilePicture} alt=""/>
                                )
                            }
                            <div className="absolute inset-0  rounded-full z-0 bg-customGray opacity-75"></div>
                        </div>

                        {/* Icon bar */}
                        <div
                            className="hidden xl:flex xl:flex-row z-10 max-h-28 items-center justify-evenly gap-6 p-14  w-[80%] bg-customGray  opacity-75 rounded-full absolute  right-[10rem] pr-[7rem] transform -translate-y-[50%]">
                            <div className="hidden md:flex md:flex-col gap-6 m-0 text-white items-center p-0">
                            <span className="flex flex-row items-center justify-center gap-2 ">
                                <img className="w-6 h-6" src="../../images/membershipIcon.svg"/>
                                نوع الحساب
                            </span>
                                <span>{currentStore.MembershipNameAr} </span>
                            </div>
                            {currentStore.CanBeFollowed &&
                                <div className=" flex flex-col gap-6 m-0 text-white items-center p-0">
                            <span className="flex flex-row items-center justify-center gap-2 ">
                                <img className="w-6 h-6" src="../../images/users.svg"/>
                                المتابعين
                            </span>
                                    <span>{currentStore.TotalFollowers} </span>
                                </div>}
                            <div className=" flex flex-col gap-6 m-0 text-white items-center p-0">
                            <span className="flex flex-row items-center justify-center gap-2 ">
                                <img className="w-6 h-6" src="../../images/map-pin.svg"/>
                                المدينة
                            </span>
                                <span>{currentStore.City} </span>
                            </div>
                            <div className=" flex  flex-col gap-6 m-0 text-white items-center p-0">
                            <span className="flex flex-row items-center justify-center gap-2 ">
                                <img className="w-6 h-6" src="../../images/map-pin.svg"/>
                                المنطقة
                            </span>
                                <span>{currentStore.Area} </span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-4 mr-10">
                                <button
                                    onClick={copyCurrentLinkToClipboard}
                                    className="flex flex-row-reverse items-center gap-2 bg-customGray2 rounded-full text-primary text-md  px-2 py-1 ">
                                    <span className="text-sm ">شارك المتجر</span>
                                    <img className="w-4 h-4" src="../../images/share.svg"/>
                                </button>
                                <button
                                    onClick={() => setShowMobileNumber(!showMobileNumber)}
                                    className="flex flex-row-reverse items-center gap-2 bg-customGray2 rounded-full text-primary text-md  px-2 py-1 ">
                                    <span dir={'ltr'}
                                          className="text-sm ">{showMobileNumber ? `+963-${currentStore.MobileNumber}` : 'اضغط لإظهار الرقم'}</span>
                                    <img className="w-4 h-4" src="../../images/phonIconBlack.svg"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/*    on small screen -Icon bar-*/}
                    {/* bg-red-300 */}
                    <div
                        className="flex flex-col xl:hidden gap-0 w-full relative  justify-center  items-center">
                        {/* bg-yellow-300 */}
                        <div
                            className="flex flex-row gap-0 w-[90%] p-0 relative   justify-start  items-start">
                            <div className="relative w-12  bg-blue-500">
                                <div
                                    className="flex z-50 w-24 h-24  absolute top-0  z-50  rounded-full transform -translate-y-[50%]">
                                    {
                                        currentStore.ProfilePicture === "" ? (
                                            <img
                                                className="w-20 h-20 mx-auto mt-2  object-fit bg-white rounded-full z-10"
                                                src="../images/logo-06.svg" alt=""/>
                                        ) : (
                                            <img className="w-20 h-20  mx-auto mt-2  object-cover rounded-full z-10"
                                                 src={currentStore.ProfilePicture} alt=""/>
                                        )
                                    }
                                    <div
                                        className="absolute inset-0  rounded-full z-0 bg-customGray opacity-75"></div>
                                </div>
                            </div>
                            {/* bg-blue-300  */}
                            <div className=" w-full">
                                <div
                                    className="flex flex-row  z-10 max-h-20 items-center justify-end gap-6 p-4 w-[100%]  bg-customGray  opacity-75 rounded-2xl  pr-[0rem] transform -translate-y-[50%] ">
                                    <div className="flex flex-col items-center justify-center gap-4 mr-10">
                                        <button
                                            onClick={copyCurrentLinkToClipboard}
                                            className="flex flex-row-reverse items-center gap-2 bg-customGray2 rounded-lg text-primary text-md  px-2 py-1 ">
                                            <span className="text-xs ">شارك المتجر</span>
                                            <img className="w-4 h-4" src="../../images/share.svg"/>
                                        </button>
                                        <button
                                            onClick={() => setShowMobileNumber(!showMobileNumber)}
                                            className="flex flex-row-reverse items-center gap-2 bg-customGray2 rounded-lg text-primary text-md  px-2 py-1 ">
                                            <span dir={'ltr'}
                                                  className="text-sm ">{showMobileNumber ? `+963-${currentStore.MobileNumber}` : 'اضغط لإظهار الرقم'}</span>
                                            <img className="w-4 h-4" src="../../images/phonIconBlack.svg"/>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className="text-2xl self-start pr-4 md:pr-16 pb-10 font-bold">{currentStore.Title}</h1>
                    </div>
                    <div
                        className="flex flex-row xl:hidden z-10 max-h-20 items-center justify-evenly gap-6 p-6  w-full bg-gray-300  opacity-75">
                        <div className="flex flex-col gap-6 m-0 text-xs text-gray-900 items-center p-0">
                            <span className="flex flex-row  text-primary font-bold items-center justify-center gap-2 ">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="30.041"
                                     height="27.731" viewBox="0 0 30.041 27.731">
                                      <g id="Group_5984" data-name="Group 5984" transform="translate(0 0)">
                                        <path id="storefront"
                                              d="M54.041,41.244A1.139,1.139,0,0,0,54,40.926l-2.073-7.25A2.321,2.321,0,0,0,49.709,32H28.333a2.321,2.321,0,0,0-2.217,1.675l-2.071,7.25a1.139,1.139,0,0,0-.045.318v2.311a5.777,5.777,0,0,0,2.311,4.622V57.42a2.311,2.311,0,0,0,2.311,2.311h20.8a2.311,2.311,0,0,0,2.311-2.311V48.176a5.777,5.777,0,0,0,2.311-4.622ZM28.333,34.311H49.709l1.649,5.777H26.688ZM35.554,42.4h6.933v1.155a3.466,3.466,0,0,1-6.933,0Zm-2.311,0v1.155a3.466,3.466,0,0,1-6.933,0V42.4ZM49.42,57.42h-20.8v-8.2a5.857,5.857,0,0,0,1.155.116A5.777,5.777,0,0,0,34.4,47.021a5.777,5.777,0,0,0,9.244,0,5.777,5.777,0,0,0,4.622,2.311,5.858,5.858,0,0,0,1.155-.116Zm-1.155-10.4A3.466,3.466,0,0,1,44.8,43.554V42.4h6.933v1.155A3.466,3.466,0,0,1,48.264,47.021Z"
                                              transform="translate(-24 -32)" fill="#273E7A"/>
                                      </g>
                                    </svg>

                                نوع الحساب
                            </span>
                            <span>{currentStore.MembershipNameAr} </span>
                        </div>
                        {currentStore.CanBeFollowed &&
                            <div className="flex flex-col gap-6 m-0 text-xs text-gray-900 items-center p-0">
                            <span className="flex flex-row text-primary font-bold  items-center justify-center gap-2 ">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="33.203"
                                     height="21.123"
                                     viewBox="0 0 33.203 21.123">
                                      <path id="users"
                                            d="M17.412,62.488a7.92,7.92,0,1,0-8.778,0A12.649,12.649,0,0,0,2.4,67.466,1.056,1.056,0,1,0,4.17,68.619a10.56,10.56,0,0,1,17.706,0,1.056,1.056,0,1,0,1.769-1.154,12.649,12.649,0,0,0-6.233-4.978ZM7.215,55.9a5.808,5.808,0,1,1,5.808,5.808A5.808,5.808,0,0,1,7.215,55.9ZM34.953,68.927a1.056,1.056,0,0,1-1.461-.308,10.537,10.537,0,0,0-8.853-4.8,1.056,1.056,0,0,1,0-2.112,5.808,5.808,0,1,0-2.157-11.2,1.056,1.056,0,1,1-.784-1.96,7.92,7.92,0,0,1,7.33,13.944,12.649,12.649,0,0,1,6.233,4.978A1.056,1.056,0,0,1,34.953,68.927Z"
                                            transform="translate(-2.229 -47.976)" fill="#273E7A"/>
                                    </svg>

                                المتابعين
                            </span>
                                <span>{currentStore.TotalFollowers} </span>
                            </div>}
                        <div className=" flex flex-col gap-6 m-0  text-xs  text-gray-900 items-center p-0">
                            <span className="flex flex-row text-primary font-bold items-center justify-center gap-2 ">
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="25.206"
                                     height="32.08" viewBox="0 0 25.206 32.08">
                                      <path id="map-pin"
                                            d="M52.6,22.874A5.729,5.729,0,1,0,58.332,28.6,5.729,5.729,0,0,0,52.6,22.874Zm0,9.166A3.437,3.437,0,1,1,56.04,28.6,3.437,3.437,0,0,1,52.6,32.04ZM52.6,16A12.617,12.617,0,0,0,40,28.6c0,4.5,2.078,9.263,6.015,13.785a36.405,36.405,0,0,0,5.936,5.485,1.146,1.146,0,0,0,1.315,0,36.4,36.4,0,0,0,5.925-5.485c3.931-4.521,6.015-9.288,6.015-13.785A12.617,12.617,0,0,0,52.6,16Zm0,29.5c-2.367-1.862-10.312-8.7-10.312-16.9a10.312,10.312,0,1,1,20.623,0C62.915,36.8,54.971,43.641,52.6,45.5Z"
                                            transform="translate(-40 -16)" fill="#273E7A"/>
                                    </svg>

                                المدينة
                            </span>
                            <span>{currentStore.City} </span>
                        </div>
                        <div className=" flex  flex-col gap-6 m-0 text-xs  text-gray-900 items-center p-0">
                            <span className="flex flex-row text-primary font-bold items-center justify-center gap-2 ">
                               <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="25.206" height="32.08"
                                    viewBox="0 0 25.206 32.08">
                                      <path id="map-pin"
                                            d="M52.6,22.874A5.729,5.729,0,1,0,58.332,28.6,5.729,5.729,0,0,0,52.6,22.874Zm0,9.166A3.437,3.437,0,1,1,56.04,28.6,3.437,3.437,0,0,1,52.6,32.04ZM52.6,16A12.617,12.617,0,0,0,40,28.6c0,4.5,2.078,9.263,6.015,13.785a36.405,36.405,0,0,0,5.936,5.485,1.146,1.146,0,0,0,1.315,0,36.4,36.4,0,0,0,5.925-5.485c3.931-4.521,6.015-9.288,6.015-13.785A12.617,12.617,0,0,0,52.6,16Zm0,29.5c-2.367-1.862-10.312-8.7-10.312-16.9a10.312,10.312,0,1,1,20.623,0C62.915,36.8,54.971,43.641,52.6,45.5Z"
                                            transform="translate(-40 -16)" fill="#273E7A"/>
                                    </svg>
                                المنطقة
                            </span>
                            <span>{currentStore.Area} </span>
                        </div>
                    </div>

                    <div className="p-10 pt-10 lg:pt-6 lg:pr-28 flex flex-col gap-10">
                        <h1 className="hidden lg:block text-4xl font-bold">{currentStore.Title}</h1>

                        <div className="flex flex-col gap-4">
                            <h3 className="text-xl">نبذة عن المتجر</h3>
                            <p>{currentStore.About}</p>
                        </div>

                        {currentStore.DedicatedLink && <div>
                            <button
                                onClick={copyStoreLinkToClipboard}
                                className="flex flex-row-reverse items-center gap-2 bg-primary hover:bg-blue-800 rounded-lg text-white text-md  px-4 py-2 ">
                                <span className="text-sm font-bold">شارك المتجر</span>
                                <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="28.645"
                                     height="32.524" viewBox="0 0 28.645 32.524">
                                    <path id="Icon_awesome-share-alt" data-name="Icon awesome-share-alt"
                                          d="M21.329,19.39a5.792,5.792,0,0,0-3.623,1.266L11.5,16.775a5.85,5.85,0,0,0,0-2.526l6.21-3.881A5.807,5.807,0,1,0,15.65,7.08L9.44,10.961a5.817,5.817,0,1,0,0,9.1l6.21,3.881a5.817,5.817,0,1,0,5.679-4.554Z"
                                          transform="translate(0.75 0.75)" fill="none" stroke="#fff" strokeWidth="1.5"/>
                                </svg>

                            </button>
                        </div>}

                        {currentStore.CanExposeServices && <div className="flex flex-col gap-4 flex-wrap">
                            <h3 className="text-xl">الخدمات</h3>
                            <div className="flex flex-row flex-wrap">
                                {
                                    currentStore.StoreServices.map((item, index) => {
                                        return (
                                            <span key={index}>
                                            {item.NameAr}
                                                {index < currentStore.StoreServices.length - 1 && <> &nbsp; | &nbsp; </>}
                                        </span>
                                        )
                                    })
                                }
                            </div>
                        </div>}

                        {currentStore.ExposeClassifications && <div className="flex flex-col gap-4">
                            <h3 className="text-xl">التصنيفات</h3>
                            <div className="flex flex-row flex-wrap gap-2">
                                {
                                    currentStore.StoreCategory.map((item, index) => {
                                        return (
                                            <span key={index}
                                                  className="rounded-3xl p-2 border-2 border-blue-500 text-blue-500 font-bold">
                                            {item.NameAr}
                                                {/*{index < currentStore.StoreCategory.length - 1 && <> &nbsp; | &nbsp; </>}*/}
                                        </span>
                                        )
                                    })
                                }
                            </div>
                        </div>}

                    </div>

                    <Ads filterParameters={{'storeId': currentStore.Id, 'pageId': page, 'pageSize': 10}} page={page}
                         onSetPage={setPage}/>
                </div>
                <ContactUs/>
            </>
    );
}

export default SingleStore;