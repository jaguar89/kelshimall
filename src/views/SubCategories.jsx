import React, {useEffect, useState} from 'react';
import {useCategoryContext, useHomeContext} from "../contexts/ContextProvider.jsx";
import {useNavigate, useParams} from "react-router-dom";
import Ads from "../components/Ads.jsx";
import ContactUs from "../components/ContactUs.jsx";

function SubCategories() {
    const homeContext = useHomeContext();
    const categoryContext = useCategoryContext();
    const {id} = useParams();
    const [page, setPage] = useState(0);
    const categories = homeContext.categories;
    const navigate = useNavigate();

    useEffect(() => {

        return () => {
            if (!location.pathname.includes('/categories/'))
                categoryContext.setCategory(null);
        }
    }, []);

    useEffect(() => {
        if (/^\d+$/.test(id)) {
            if (location.pathname.includes('/categories/')) {
                if (id && categories) {
                    const category = categories.find(item => item.Id === parseInt(id));
                    if (!category) {
                        navigate('/404');
                    }
                    categoryContext.setCategory(id);
                }
            }
        } else {
            navigate('/404');
        }
    }, [id]);

    useEffect(() => {
        setPage(0)
    }, [categoryContext]);

    function renderSubCategories() {
        const categories = homeContext.categories;
        const category = categories.find(cat => cat.Id === parseInt(categoryContext.category));
        if (!category || !category.SubCategory) {
            return null;
        }
        return category.SubCategory.map((item, index) => (
            <span key={index}
                  onClick={() => categoryContext.setSubCategory(item.Id)}
                  className={`text-sm rounded-md p-2 cursor-pointer hover:bg-primary hover:text-white ${item.Id === categoryContext.subCategory ? ' bg-primary text-white' : 'bg-secondary text-gray-700'} `}>{item.Name}</span>
        ))
    }


    function renderAdsOfSubCategory() {
        return <Ads filterParameters={{
            'categoryId': id,
            'subCategoryId': categoryContext.subCategory,
            'pageId': page,
            'pageSize': 10
        }} page={page} onSetPage={setPage}/>;
    }

    return (
        categoryContext.category &&
        <>
            <div dir={'rtl'} className="flex flex-col gap-0 mb-1">
                <div className="flex flex-wrap gap-2 items-center justify-start py-2 pr-2">
                    {
                        renderSubCategories()
                    }
                </div>
                <div className="bg-secondary w-full py-10">
                    {
                        renderAdsOfSubCategory()
                    }
                </div>
            </div>
            <ContactUs/>
        </>
    );
}

export default SubCategories;