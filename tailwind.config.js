/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html'],
    theme: {
        fontFamily: {
            'space-mono': ['Space Mono', 'sans-serif'],
        },
        colors: {
            cyan: {
                100: 'hsl(189, 41%, 97%)',
                200: 'hsl(185, 41%, 84%)',
                300: 'hsl(184, 14%, 56%)',
                400: 'hsl(186, 14%, 43%)',
                500: 'hsl(172, 67%, 45%)',
                600: 'hsl(183, 100%, 15%)',
            },
            white: 'hsl(0, 0%, 100%)',
            black: 'hsl(0, 0%, 0%)',
            transparent: 'transparent',
            red: 'hsl(0, 95%, 68%)',
        },
        extend: {},
    },
    plugins: [],
}
