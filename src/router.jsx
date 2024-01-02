import {createBrowserRouter, Navigate} from "react-router-dom";
import GuestLayout from "./layouts/GuestLayout.jsx";
import NotFound from "./views/NotFound.jsx";
import Home from "./views/Home.jsx";
import SingleAd from "./views/SingleAd.jsx";
import SingleStore from "./views/SingleStore.jsx";
import Complaint from "./views/Complaint.jsx";
import TermsOfUse from "./views/TermsOfUse.jsx";
import Services from "./views/Services.jsx";
import Memberships from "./views/Memberships.jsx";
import PaidServices from "./views/PaidServices.jsx";
import AboutKelshiMall from "./views/AboutKelshiMall.jsx";
import BannedAds from "./views/BannedAds.jsx";
import SafetyRules from "./views/SafetyRules.jsx";
import SellerTips from "./views/SellerTips.jsx";
import SubCategories from "./views/SubCategories.jsx";
import LatestAds from "./views/LatestAds.jsx";
import FeaturedAds from "./views/FeaturedAds.jsx";
import Search from "./views/Search.jsx";
import AllStores from "./views/AllStores.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <GuestLayout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/ads/:id',
                element: <SingleAd/>
            },
            {
                path: '/stores/:id',
                element: <SingleStore/>
            },
            {
                path: '/stores',
                element: <AllStores/>
            },
            {
                path: '/categories/:id',
                element: <SubCategories/>
            },
            {
                path: '/latest-ads',
                element: <LatestAds/>
            },
            {
                path: '/featured-ads',
                element: <FeaturedAds/>
            },
            {
                path: '/search/:word',
                element: <Search/>
            },
            {
                path: '/send-complaint',
                element: <Complaint/>
            },
            {
                path: '/terms-of-use',
                element: <TermsOfUse/>
            },
            {
                path: '/services',
                element: <Services/>
            },
            {
                path: '/memberships',
                element: <Memberships/>
            },
            {
                path: '/paid_services',
                element: <PaidServices/>
            },
            {
                path: '/about-kelshimall',
                element: <AboutKelshiMall/>
            },
            {
                path: '/banned-ads',
                element: <BannedAds/>
            },
            {
                path: '/safety-rules',
                element: <SafetyRules/>
            },
            {
                path: '/seller-tips',
                element: <SellerTips/>
            },
            {
                path: '/404',
                element: <NotFound/>
            },
            {
                path: '*',
                element: <Navigate to={'/not-found'}/>
            }
        ]
    } ,
    {
        path:'/not-found',
        element : <NotFound/>
    }
]);


export default router;