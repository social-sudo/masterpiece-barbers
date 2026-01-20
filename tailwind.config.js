/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'outfit': ['Outfit', 'sans-serif'],
            },
            colors: {
                'cream': {
                    50: '#fdfcfa',
                    100: '#faf8f5',
                    200: '#f5f0e8',
                    300: '#ebe4d6',
                    400: '#d9ceb7',
                },
                'warm': {
                    600: '#8b7355',
                    700: '#6b5a45',
                    800: '#4d4235',
                    900: '#3d3529',
                },
                'gold': {
                    400: '#d4af37',
                    500: '#c9a75f',
                    600: '#b8944f',
                },
                'sage': {
                    100: '#e8ede6',
                    200: '#d4ddd0',
                    500: '#7a9a6a',
                    600: '#5c7a4c',
                }
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
            }
        },
    },
    plugins: [],
}
