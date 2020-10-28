export default {
    navigation: [
        {
            id: 'my projects',
            link: '/my_projects',
            name: 'my_projects'
        },
        {
            id: 'work projects',
            link: '/work_projects',
            name: 'work_projects'
        },
        {
            id: 'about',
            link: '/about',
            name: 'about'
        }
    ],
    social: [
        {
            name: 'vkontakte',
            link: 'https://vk.com/blind_resist'
        },
        {
            name: 'facebook',
            link: 'https://www.facebook.com/profile.php?id=100002158603006'
        },
        {
            name: 'instagram',
            link: 'https://www.instagram.com/artem.anpilov/'
        },
        {
            name: 'telegram',
            link: 'https://t.me/BlindResist'
        },
        {
            name: 'github',
            link: 'https://github.com/BlindResist'
        }
    ],
    pages: {
        main: {
            image: './src/images/itsme.jpg'
        },
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
            {
                id: 'evraz',
                link: 'https://www.evraz.com/',
                image: './src/images/logos/logo-evraz.png'
            }
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
}
