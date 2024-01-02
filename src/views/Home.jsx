import React from 'react'
import '../App.css'
import Tabs from "../components/Tabs.jsx";
import {useHomeContext} from "../contexts/ContextProvider.jsx";
import ImageSlider from "../components/ImageSlider.jsx";

function Home(props) {
    const homeContext = useHomeContext();
    const banners = homeContext.banners;

    function renderBanner() {
        return <ImageSlider home={true} banners={banners} propertyName={"ImageUrl"} slide={false}  />
    }

    return (
        <>
            <section id="banner" className="w-full h-full mb-0 m-0 p-0 ">
                {
                    renderBanner()
                }
            </section>

            <Tabs/>
        </>
    )
}

export default Home
