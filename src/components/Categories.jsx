import React, {useEffect} from 'react';
import {useCategoryContext, useHomeContext} from "../contexts/ContextProvider.jsx";
import {Link, useNavigate, useParams} from "react-router-dom";
import Spinner from "./Spinner.jsx";

function Categories(props) {
    const homeContext = useHomeContext();
    const categoryContext = useCategoryContext();
    const categories = homeContext.categories;

    return (
        categories.length === 0 ?
            <Spinner /> :
            <section className="w-full">
                <nav dir={'rtl'}
                     className="flex flex-wrap gap-4 items-center justify-evenly py-2 px-4"
                >
                    {
                        categories.map((category, index) => (
                            <Link key={index} to={`/categories/${category.Id}`}
                                  onClick={() => {
                                      categoryContext.setCategory(category.Id);
                                      categoryContext.setSubCategory(null);
                                  }}
                                  className={`group font-bold text-md p-1 min-w-min flex flex-row-reverse justify-center gap-2 items-center
                           ${category.Id === parseInt(categoryContext.category) ? 'border-b-2 border-gray-400' : ''}`}>
                                <span className={`text-blue-600 group-hover:text-blue-400 lg:inline-block
                                  ${category.Id === parseInt(categoryContext.category) ? `inline-block` : 'hidden'}
                                `}>{category.Name}</span>
                                <div className={`bg-[${category.BgColor}] p-0 w-10 h-10 rounded-full flex items-center justify-center  
                                   ${category.Id === parseInt(categoryContext.category) ? `bg-[#6F9EC5]` : ''}
                                  group-hover:bg-[#6F9EC5]`}>
                                    <img className={` `} src={category.IconUrl}/>

                                </div>
                                </Link>
                        ))
                    }
                </nav>
            </section>
    );
}

export default Categories;