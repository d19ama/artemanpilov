const App = {
    components: {
        navigation: [
            {
                id: 'about',
                link: '/about',
                name: 'about'
            },
            {
                id: 'contacts',
                link: '/contacts',
                name: 'contacts'
            }
        ],
        portfolio: [
            {
                id: 'magnit',
                link: 'https://www.magnit.com/ru/',
                image: './src/images/logos/logo-magnit.png'
            },
            {
                id: 'gazprom',
                link: 'https://ir.gazprom-neft.ru/',
                image: './src/images/logos/logo-gazprom.png'
            },
            {
                id: 'globalports',
                link: 'https://www.globalports.com/ru/',
                image: './src/images/logos/logo-globalports.png'
            },
            {
                id: 'evraz',
                link: 'https://www.evraz.com/',
                image: './src/images/logos/logo-evraz.png'
            },
            {
                id: 'gvgold',
                link: 'https://www.gvgold.ru/ru/',
                image: './src/images/logos/logo-gvgold.png'
            },
            {
                id: 'samoletlo',
                link: 'https://samoletlo.ru/',
                image: './src/images/logos/logo-samoletlo.png'
            },
            {
                id: 'setlcity',
                link: 'http://setlcity.ru/',
                image: './src/images/logos/logo-setl.png'
            },
            {
                id: 'spbrealty',
                link: 'http://spbrealty.ru/',
                image: './src/images/logos/logo-pn.png'
            },
            {
                id: 'domplusoffice',
                link: 'http://domplusoffice.ru/',
                image: './src/images/logos/logo-dpo.png'
            },
            {
                id: 'plus47',
                link: 'http://plus47.ru/',
                image: './src/images/logos/logo-plus47.png'
            }
        ],
        about: {
            image: {
                src: './src/images/itsme.jpg',
                alt: 'Its me :)'
            },
            info: [
                {
                    title: 'Персональные:',
                    data: [
                        'Анпилов Артем Михайлович',
                        '1987 года рождения',
                        'Санкт-Петербург',
                        'front-end с 2014'
                    ]
                },
                {
                    title: 'Скилы:',
                    data: [
                        'javascript / vuejs / react / sass / html',
                        'webpack / gulp / git / docker',
                        'базовый php',
                        'cross browser, adaptive, responsive',
                        'Adobe Ps, Adobe Ai, Figma'
                    ]
                },
                {
                    title: 'Хобби:',
                    data: [
                        'Музыкант/композитор',
                        'Путешествия',
                        '3D печать'
                    ]
                }
            ]
        }
    }
}

export default App
