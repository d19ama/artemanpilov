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
            personal: {
                email: 'blind.resist@gmail.com',
                cv: '#',
                detail: [
                    'Anpilov Artem Mihajlovich',
                    'Born in 1987',
                    'St. Petersburg',
                    'front-end since 2014'
                ]
            },
            hobby: [
                'Music',
                'Travel',
                '3D printing'
            ],
            cv: {
                name: 'Full CV',
                link: ''
            },
            skills: [
                {
                    name: 'JavaScript',
                    experience: '4 years'
                },
                {
                    name: 'Vue.js',
                    experience: '2 years'
                },
                {
                    name: 'React',
                    experience: '1 year'
                },
                {
                    name: 'Webpack',
                    experience: '2 years'
                },
                {
                    name: 'Sass',
                    experience: '3 years'
                },
                {
                    name: 'Git',
                    experience: '5 years'
                },
                {
                    name: 'Docker',
                    experience: '2 years'
                },
                {
                    name: 'Jest',
                    experience: '3 months'
                }
            ]
        }
    }
}
