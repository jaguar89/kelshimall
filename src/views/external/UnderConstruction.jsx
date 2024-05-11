import React from 'react';

function UnderConstruction(props) {
    return (
        <div className="bg-gray-200 flex items-center justify-center h-screen">
            <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Under Construction</h1>
                <p className="text-lg text-gray-600 mb-8">We're working on something awesome! Please check back
                    later.</p>
                <img src="/logo.svg" alt="Under Construction" className="mx-auto mb-8" />
                    <p className="text-sm text-gray-500">© 2024 Your Company</p>
            </div>
        </div>
    );
}

export default UnderConstruction;