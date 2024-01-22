import React, {useEffect, useState} from 'react';
import ContactUs from "../../components/ContactUs.jsx";
import Spinner from "../../components/Spinner.jsx";
import {fetchPolicyExternal} from "../../apiService.js";

function Policy(props) {
    const [policyText , setPolicyText] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPolicyExternal();
                // console.log('Policy Data from api:', data);
                setPolicyText(data.policy);
            } catch (error) {
                console.error('Error, Policy.jsx: ' + error);
            }
        };

        fetchData();
    }, []);


    return (
         policyText === "" ? <Spinner/> :
            <>
                <div dir={'rtl'}
                     className="p-10 px-4 lg:px-20 my-10 mx-4 flex flex-col items-center shadow-xl border border-gray-200 rounded-xl">
                    <h1 className="text-3xl text-center border-dashed border-b-4  py-4 mb-10">شروط الإستخدام</h1>
                    <p className="text-xl leading-10 font-medium">
                        {policyText}
                    </p>
                </div>
            </>
    );
}

export default Policy;