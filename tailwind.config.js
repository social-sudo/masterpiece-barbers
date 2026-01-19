/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'playfair': ['"Playfair Display"', 'serif'],
                'inter': ['Inter', 'sans-serif'],
            },
            colors: {
                'dark': {
                    950: '#0a0a0a',
                    900: '#171717',
                }
            }
        },
    },
    plugins: [],
}
