import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'main'],
            },
            colors: {
                'black': {
                    '50': '#000000',
                    '100': '#000000',
                    '200': '#000000',
                    '300': '#000000',
                    '400': '#000000',
                    '500': '#000000',
                    '600': '#000000',
                    '700': '#000000',
                    '800': '#000000',
                    '900': '#000000',
                    '950': '#000000',
                }
            },

        }
    }
}
