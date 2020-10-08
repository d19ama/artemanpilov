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
                id: 'globalports',
                link: 'https://www.globalports.com/ru/',
                image: './src/images/logos/logo-globalports.png'
            },
            {
                id: 'gazprom',
                link: 'https://ir.gazprom-neft.ru/',
                image: './src/images/logos/logo-gazprom.png'
            },
            // too old for this shit =/
            // {
            //     id: 'evraz',
            //     link: 'https://www.evraz.com/',
            //     image: './src/images/logos/logo-evraz.png'
            // },
            // {
            //     id: 'gvgold',
            //     link: 'https://www.gvgold.ru/ru/',
            //     image: './src/images/logos/logo-gvgold.png'
            // },
            // {
            //     id: 'samoletlo',
            //     link: 'https://samoletlo.ru/',
            //     image: './src/images/logos/logo-samoletlo.png'
            // },
            // {
            //     id: 'setlcity',
            //     link: 'http://setlcity.ru/',
            //     image: './src/images/logos/logo-setl.png'
            // },
            // {
            //     id: 'spbrealty',
            //     link: 'http://spbrealty.ru/',
            //     image: './src/images/logos/logo-pn.png'
            // },
            // {
            //     id: 'domplusoffice',
            //     link: 'http://domplusoffice.ru/',
            //     image: './src/images/logos/logo-dpo.png'
            // },
            // {
            //     id: 'plus47',
            //     link: 'http://plus47.ru/',
            //     image: './src/images/logos/logo-plus47.png'
            // }
        ],
        about: {
            image: {
                src: './src/images/itsme.jpg',
                alt: 'Its me :)'
            },
            info: [
                {
                    title: 'Personal:',
                    data: [
                        'Anpilov Artem Mihajlovich',
                        'Born in 1987',
                        'St. Petersburg',
                        'front-end since 2014'
                    ]
                },
                {
                    title: 'Skills:',
                    data: [
                        'javascript / vuejs / react / sass / html',
                        'webpack / gulp / git / docker / jest',
                        'basic php',
                        'cross browser, adaptive, responsive',
                        'Adobe Ps, Adobe Ai, Figma'
                    ]
                },
                {
                    title: 'Hobby:',
                    data: [
                        'Music',
                        'Travel',
                        '3D printing'
                    ]
                }
            ],
            cv: {
                name: 'Full CV',
                link: ''
            }
        },
        contacts: [
            {
                id: 'vk',
                name: 'vkontakte',
                link: 'https://vk.com/blind_resist',
                src: './src/images/icons/vk.svg'
            },
            {
                id: 'instagram',
                name: 'instagram',
                link: 'https://www.instagram.com/artem.anpilov/',
                src: './src/images/icons/instagram.svg'
            },
            {
                id: 'telegram',
                name: 'telegram',
                link: 'https://t.me/BlindResist',
                src: './src/images/icons/telegram.svg'
            },
            {
                id: 'gmail',
                name: 'gmail',
                link: 'mailto:blind.resist@gmail.com',
                src: './src/images/icons/gmail.svg'
            },
            {
                id: 'github',
                name: 'github',
                link: 'https://github.com/BlindResist',
                src: './src/images/icons/github.svg'
            },
            {
                id: 'facebook',
                name: 'facebook',
                link: 'https://www.facebook.com/profile.php?id=100002158603006',
                src: './src/images/icons/facebook.svg'
            }
        ]
    }
}

export default App
