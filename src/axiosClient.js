import axios from "axios";
import pako from 'pako';

export const API_URL = "https://api.kelshimall.com:7738/apiV2/";

const axiosClient = axios.create();


axiosClient.interceptors.response.use(null, (error) => {
    if (!error.response) console.log("Unexpected error - " +
        "code: " + error.code + " - message: " + error.message);
    else {
        const expectedError = error.response.status >= 400 && error.response.status < 500;
        if (!expectedError)
            console.log(error.response, error.response.status);
    }
    return Promise.reject(error);
});


export default axiosClient;

export  function convertFromBase64AndDecompress(mime) {
    // Decode from base64
    const b64DecodedBytes = new Uint8Array(atob(mime).split('').map(char => char.charCodeAt(0)));

    // Slice the first 4 bytes (header)
    const slicedBuffer = b64DecodedBytes.slice(4);

    // Decompress using pako
    const decompressedUint8Array = pako.inflate(slicedBuffer);

    // Convert the decompressed Uint8Array to a string using UTF-16 encoding
    const textDecoder = new TextDecoder('utf-16le');
    const jsonString = textDecoder.decode(decompressedUint8Array);

    // console.log('Decompressed Data String:', jsonString);
    return jsonString;
}