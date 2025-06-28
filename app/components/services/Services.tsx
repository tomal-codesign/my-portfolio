import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import ServiceCard from './services-card/ServiceCard'
import UIUX1 from '../../../public/images/services/uiux-1.jpg'
import UIUX2 from '../../../public/images/services/uiux-2.jpg'
import UIUX3 from '../../../public/images/services/uiux-3.jpg'
import WebDesign1 from '../../../public/images/services/webdesign-1.jpg'
import WebDesign2 from '../../../public/images/services/webdesign-2.jpg'
import WebDesign3 from '../../../public/images/services/webdesign-3.jpg'
import FrontEnd1 from '../../../public/images/services/front-end-1.jpg'
import FrontEnd2 from '../../../public/images/services/front-end-2.jpg'
import FrontEnd3 from '../../../public/images/services/front-end-3.jpg'
const ServiceData = [
    {
        id: 1,
        name: 'UI/UX Design',
        description: 'UX Design refers to the term User Experience Design, while UI Design  stands for User Interface Design. Both elements are crucial to a product and work closely together.',
        icon: [
            {
                id: 1,
                icon: 'material-icon-theme:figma',
                name: 'Figma'
            },
            {
                id: 2,
                icon: 'devicon:photoshop',
                name: 'Photoshop'
            },
        ],
        img: [
            {
                id: 1,
                type: "img",
                img: UIUX1
            },
            {
                id: 2,
                type: "img",
                img: UIUX2
            },
            {
                id: 3,
                type: "img",
                img: UIUX3
            }
        ]
    },
    {
        id: 2,
        name: 'Web Design',
        description: 'Web design encompasses many different skills and disciplines in the  production and maintenance of websites. The different areas of web  design include UI & UX design.',
        icon: [
            {
                id: 1,
                icon: 'vscode-icons:file-type-html',
                name: 'Html'
            },
            {
                id: 2,
                icon: 'vscode-icons:file-type-css2',
                name: 'CSS'
            },
            {
                id: 3,
                icon: 'devicon:bootstrap',
                name: 'Bootstrap'
            },
            {
                id: 4,
                icon: 'devicon:tailwindcss',
                name: 'Tailwind'
            },
        ],
        img: [
            {
                id: 1,
                type: "img",
                img: WebDesign1
            },
            {
                id: 1,
                type: "img",
                img: WebDesign2
            },
            {
                id: 1,
                type: "img",
                img: WebDesign3
            }
        ]
    },
    {
        id: 3,
        name: 'Front End Development',
        description: 'Frontend web development is the producing HTML, CSS, Tailwind Css,  Bootstrap,JavaScript, React, Angular for a Web Application so user can  see and interact with them directly.',
        icon: [
            {
                id: 1,
                icon: 'devicon:javascript',
                name: 'JavaScript'
            },
            {
                id: 2,
                icon: 'devicon:react',
                name: 'React'
            },
            {
                id: 3,
                icon: 'devicon:nextjs',
                name: 'Next Js'
            },
            {
                id: 3,
                icon: 'devicon:angular',
                name: 'Angular'
            },
        ],
        img: [
            {
                id: 1,
                type: "img",
                img: FrontEnd1
            },
            {
                id: 1,
                type: "img",
                img: FrontEnd2
            },
            {
                id: 1,
                type: "img",
                img: FrontEnd3
            }
        ]
    }
]


const Services = () => {
    return (
        <div>
            <div className='pt-8'>
                <div className='container mx-auto px-4'>
                    <div className="grid grid-cols-2 gap-6">
                        <div className='custom-spotlight-card rounded-[46px] backdrop-blur-lg lg:sticky top-[40px] left-0 h-[300px]  lg:pr-[100px]'>
                            <h1 className="text-[var(--normal-text)] text-[40px] font-extrabold">My Eyes to do</h1>
                            <p className="pt-1 text-[var(--normal-text)] text-md">An Addicted, Specialized, and Qualified to build UI/UX design for website  and mobile applications (Dealing with the front end part). I always work with the need to understand the benefits of the users, give them  something new to enjoy, and come close to new expectations in advance.</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            {ServiceData.map((item, index) => <ServiceCard key={index} {...item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services