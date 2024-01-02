/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        'node_modules/flowbite-react/lib/esm/**/*.js',
    ],
    theme: {
        extend: {},
        colors: {
            primary: '#273E7A',
            primaryLight: '#40599b',
            secondary: '#F5F5F5',
            customGray: '#707070',
            customGray2: '#E0E0E0',
            btn_primary: '#FABD00',
            btn_primaryLight: '#facb36',
        },
    },
    plugins: [
        require('flowbite/plugin'),
    ],
}

