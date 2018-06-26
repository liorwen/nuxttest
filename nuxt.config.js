const webpack = require('webpack');


module.exports = {
    /*
    ** Headers of the page
    */
    head: {
        title: 'nuxttest',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: 'Nuxt.js project'}
        ],
        script: [
            {src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    router: {
        base: '/nuxttest/'
    },
    /*
    ** Customize the progress bar color
    */
    loading: {color: '#3B8070'},
    /*
    ** Build configuration
    */
    build: {
        /*
        ** Run ESLint on save
        */
        extend(config, {isDev, isClient}) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        extend (config, ctx) {
            const fileLoader = config.module.rules.find((loader) => loader.loader === 'file-loader')
            Object.assign(fileLoader,{
                test:/\.mp3$/,
                loader: 'file-loader',
                options: { name: '/audio/[name].[hash:7].[ext]' }
            })
        },

        vendor: ['~/plugins/vue-slick'],
        // publicPath:'http://local.liorwen.io',
        publicPath: 'https://liorwen.github.io/nuxttest'
    },
    plugins: [
        {src: '~/plugins/vue-slick', ssr: false}
    ]
}
