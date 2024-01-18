import axiosClient, {API_URL, convertFromBase64AndDecompress} from "./axiosClient.js";


export const fetchHomeData = async () => {
    try {
        const response = await axiosClient.get(API_URL + 'GetHomeData?Lang=ar');
        const data = response.data;
        if (data.isCompressed === true) {
            const compressedData = data.compressedData;
            const decompressedData = convertFromBase64AndDecompress(compressedData);
            const jObj = JSON.parse(decompressedData);
            // console.log(jObj)
            return jObj;
        } else {
            // console.log('Not Compressed Data:', data);
        }
    } catch (error) {
        // console.error('Error -from API Service- /fetchHomeData/ : ' + error);
    }
}

// fetch one or more Ad item
export const fetchAdsByFilterParameter = async (filterParameters) => {
    try {
        let options = {
            "userId": null,
            "postId": null,
            "categoryId": null,
            "subCategoryId": null,
            "storeId": null,
            "title": null,
            "description": null,
            "city": null,
            "parentCategoryId": null,
            "shuffleRandom": 0.032101472842260725,
            "area": null,
            "neighborhood": null,
            "maxPrice": null,
            "minPrice": null,
            "isFollowed": null,
            "isFeatured": null,
            "postStatus": null,
            "isFavorite": null,
            "pageId": 0,
            "pageSize": 15,
            "Latest": true
        }
        for (const filterParametersKey in filterParameters) {
            if (options.hasOwnProperty(filterParametersKey)) {
                options[filterParametersKey] = filterParameters[filterParametersKey];
            }
        }
        const response = await axiosClient.post(API_URL + 'getPosts?Lang=ar', options);
        const data = response.data;
        if (data.isCompressed === true) {
            const compressedData = data.compressedData;
            const decompressedData = convertFromBase64AndDecompress(compressedData);
            const jObj = JSON.parse(decompressedData);
            return jObj;
        } else {
            // console.log('Not Compressed Data:', data);
        }
    } catch (error) {
        // console.error('Error -from API Service- /fetchAdsByFilterParameter/ : ' + error);
    }
}

// fetch one or more Store item
export const fetchStoresByFilterParameter = async (filterParameters) => {
    try {
        let options = {
            "userId": null,
            "postId": null,
            "categoryId": null,
            "subCategoryId": null,
            "storeId": null,
            "title": null,
            "description": null,
            "city": null,
            "parentCategoryId": null,
            "shuffleRandom": null,
            "area": null,
            "neighborhood": null,
            "maxPrice": null,
            "minPrice": null,
            "isFollowed": null,
            "isFeatured": null,
            "postStatus": null,
            "isFavorite": null,
            "pageId": 0,
            "pageSize": 20,
            "Latest": false
        }
        for (const filterParametersKey in filterParameters) {
            if (options.hasOwnProperty(filterParametersKey)) {
                options[filterParametersKey] = filterParameters[filterParametersKey];
            }
        }
        // console.log(options)
        const response = await axiosClient.post(API_URL + 'GetStores?Lang=ar', options);
        const data = response.data;
        if (data.isCompressed === true) {
            const compressedData = data.compressedData;
            const decompressedData = convertFromBase64AndDecompress(compressedData);
            const jObj = JSON.parse(decompressedData);
            return jObj;
        } else {
            // console.log('Not Compressed Data:', data);
        }
    } catch (error) {
        // console.error('Error -from API Service- /fetchStoresByFilterParameter/ : ' + error);
    }
}

export const fetchMembershipsData = async () => {
    try {
        const response = await axiosClient.get(API_URL + 'GetMembershipsList?Lang=1');
        const data = response.data;
        // console.info('-from API Service- /fetchMembershipsData/ : ' ,data ,data.memberships);
        return data.memberships;
    } catch (error) {
        // console.error('Error -from API Service- /fetchMembershipsData/ : ' + error);
    }
}

export const fetchPaidServicesData = async () => {
    const result = {};
    try {
        let response = await axiosClient.get(API_URL + 'GetPaidServices?Lang=1');
        result["paid_services"] = [...response.data.paidServicesList];

        response = await axiosClient.get(API_URL + 'GetPaidServices?paidServiceType=Repost');
        result["repost"] = [...response.data.paidServicesList];

        // console.info('-from API Service- /fetchPaidServicesData/ : ', result);
        return result;
    } catch (error) {
        // console.error('Error -from API Service- /fetchPaidServicesData/ : ' + error);
    }
}

export const sendComplaint = async (filterParameters) => {
    try {
        let options = {
            "requestSessionID": "",
            "Name": "name",
            "MobileNumber": "mobile",
            "Title": "title",
            "Body": "content"
        }
        for (const filterParametersKey in filterParameters) {
            if (options.hasOwnProperty(filterParametersKey)) {
                options[filterParametersKey] = filterParameters[filterParametersKey];
            }
        }
        const response = await axiosClient.post(API_URL + 'contactmessages/add', options);
        return response.data;
    } catch (error) {
        // console.error('Error -from API Service- /sendComplaint/ : ' + error);
    }
}

export const fetchPolicyExternal = async () => {
    try {
        const response = await axiosClient.get(API_URL + 'getpolicy?review=true');
        const data = response.data;
        return data;
        // if (data.isCompressed === true) {
        //     const compressedData = data.compressedData;
        //     const decompressedData = convertFromBase64AndDecompress(compressedData);
        //     const jObj = JSON.parse(decompressedData);
        //     console.log(jObj)
        //     return jObj;
        // } else {
        //     console.log('Not Compressed Data:', data);
        // }
    } catch (error) {
        // console.error('Error -from API Service- /fetchPolicyExternal/ : ' + error);
    }
}

export const increasePostView = async (id) => {
    try {
        const response = await axiosClient.post(API_URL + 'ViewPost?postID=' + id);
        const data = response.data;
        if (data.isCompressed === true) {
            const compressedData = data.compressedData;
            const decompressedData = convertFromBase64AndDecompress(compressedData);
            const jObj = JSON.parse(decompressedData);
            console.log(jObj)
            return jObj;
        } else {
            // console.log('Not Compressed Data:', data);
            return data;
        }
    } catch (error) {
        console.error('Error -from API Service- /increasePostView/ : ' + error);
    }
}
