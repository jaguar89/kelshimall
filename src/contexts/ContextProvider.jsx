import React, {createContext, useContext, useEffect, useState} from 'react';

const HomeContext = createContext({
    ads: [],
    banners: [],
    categories: [],
    contactNumber: '',
    contactWhatsapp: '',
    directLink: '',
    featuredAds: [],
    latestAds: [],
    policyText: '',
    stores: [],
    setHomeData: () => {
    }
});

const CategoryContext = createContext({
    category: null,
    setCategory: () => {
    },
    subCategory: null,
    setSubCategory: () => {
    }
});

function ContextProvider({children}) {
    const [homeData, _setHomeData] = useState({
        ads: [],
        banners: [],
        categories: [],
        contactNumber: '',
        contactWhatsapp: '',
        directLink: '',
        featuredAds: [],
        latestAds: [],
        policyText: '',
        stores: []
    });
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState(null);

    useEffect(() => {
        // console.log('Updated homeData:', homeData);
        // console.log('Updated categoryData , Category: ', category );
        // console.log('Updated categoryData , Sub Category: ', subCategory );
    }, [homeData, category , subCategory]);

    const setHomeData = (data) => {
        _setHomeData({
            ads: [...data.Ads],
            banners: [...data.Banners],
            categories: [...data.Categories],
            contactNumber: data.ContactNumber,
            contactWhatsapp: data.ContactWhatsapp,
            directLink: data.DirectLink,
            featuredAds: [...data.FeaturedAds],
            latestAds: [...data.LatestAds],
            policyText: data.PolicyText,
            stores: [...data.Stores]
        });
    };

    return (
        <HomeContext.Provider value={{...homeData, setHomeData}}>
            <CategoryContext.Provider value={{category, setCategory ,subCategory ,setSubCategory}}>
                {children}
            </CategoryContext.Provider>
        </HomeContext.Provider>
    );
}

export default ContextProvider;

export const useHomeContext = () => useContext(HomeContext);
export const useCategoryContext = () => useContext(CategoryContext);