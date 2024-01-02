import React from 'react';
import {Link, useNavigate} from "react-router-dom";

function NotFound(props) {
    const navigate = useNavigate();
    return (
        <div className="w-full h-screen flex flex-col gap-20 items-center justify-center">
            <h1 className="text-green-500 text-6xl font-bold">404 - Page Not Found.</h1>

            <Link className="  px-6 py-4 bg-blue-300 text-xl rounded-md"
                  onClick={() => {
                      navigate('/')
                  }}>Go Home!</Link>

        </div>

    );
}

export default NotFound;
