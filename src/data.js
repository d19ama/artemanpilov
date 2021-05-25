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
            image: './images/itsme.jpg'
        },
        portfolio: [
            {
                id: 'magnit',
                link: 'https://www.magnit.com/ru/',
                image: './images/logos/logo-magnit.png'
            },
            {
                id: 'globalports',
                link: 'https://www.globalports.com/ru/',
                image: './images/logos/logo-globalports.png'
            },
            {
                id: 'gazprom',
                link: 'https://ir.gazprom-neft.ru/',
                image: './images/logos/logo-gazprom.png'
            },
            {
                id: 'evraz',
                link: 'https://www.evraz.com/',
                image: './images/logos/logo-evraz.png'
            }
        ],
        projects: [
            {
                id: 'fast!cv',
                link: 'http://fastcv.digama.online/',
                image: './images/logos/logo-fast!cv.png'
            }
        ],
        about: {
            image: {
                src: './images/itsme.jpg',
                alt: 'Its me :)'
            },
            name: 'Anpilov Artem',
            experience: 'Frontend dev since 2014',
            location: 'Saint-Petersburg, Russia',
            email: 'blind.resist@gmail.com',
            cv: '#',
            hobby: [
                {
                    name: 'Music'
                },
                {
                    name: 'Traveling'
                },
                {
                    name: 'Gaming'
                }
            ],
            skills: [
                {
                    name: 'JavaScript',
                    experience: '5 years'
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
            ],
            tools: [
                {
                    name: 'Figma'
                },
                {
                    name: 'Adobe Ps'
                },
                {
                    name: 'Adobe Ai'
                },
                {
                    name: 'Sublime Text'
                }
            ]
        }
    }
}
