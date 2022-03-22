module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppins: "'Poppins', sans-serif",
                formular: "'Formular', sans-serif",
            },
            colors: {
                body: '#fffefe',
                primary: '#1b1a1a',
                secondary: '#7c7c7c',
            },
        },
    },
    corePlugins: {
        aspectRatio: false,
    },
    plugins: [require('@tailwindcss/forms'), require('@tailwindcss/aspect-ratio')],
}
