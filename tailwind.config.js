/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
    content: ['./src/**/*.{astro,html,js,hbs,vue,yaml}'],
    theme: {
        extend: {
            textShadow: {
                none: 'none',
                sm: '0 3px 2px var(--tw-shadow-color)',
                DEFAULT: '0 2px 4px var(--tw-shadow-color)',
                md: '4px 4px 8px var(--tw-shadow-color)',
                lg: '4px 8px 16px var(--tw-shadow-color)',
                xl: '4px 18px 20px var(--tw-shadow-color)',
            },
        },
    },
    variants: {
        textShadow: ['responsive', 'hover', 'focus'],
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography'),
        plugin(function ({ addUtilities, e, theme, variants }) {
            const textShadow = theme('textShadow', {});
            const textShadowVariants = variants('textShadow', []);

            const utilities = Object.fromEntries(
                Object.entries(textShadow).map(([key, value]) => {
                    const className =
                        key === 'DEFAULT' ? 'text-shadow' : `${e(`text-shadow-${key}`)}`;
                    return [
                        `.${className}`,
                        {
                            'text-shadow': value,
                        },
                    ];
                })
            );
            addUtilities(utilities, textShadowVariants);
        }),
    ],
};
