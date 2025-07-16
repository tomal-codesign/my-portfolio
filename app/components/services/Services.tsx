"use client";
import { Icon } from '@iconify/react/dist/iconify.js'
import ServiceCard from './services-card/ServiceCard'
import UIUX from '../../../public/images/services/uiux-1.jpg'
import WebDesign from '../../../public/images/services/webdesign-2.jpg'
import FrontEnd from '../../../public/images/services/front-end-1.jpg'
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
        img: UIUX
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
        img: WebDesign
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
                id: 4,
                icon: 'devicon:angular',
                name: 'Angular'
            },
        ],
        img: FrontEnd
    }
]


const Services = () => {
    return (
        <div>
            <div className='pt-16'>
                <div className='container mx-auto px-4'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className='custom-spotlight-card rounded-[46px] backdrop-blur-lg lg:sticky top-[100px] left-0 lg:h-[300px] h-auto lg:pr-[100px]'>
                            <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[40px] font-extrabold">My Eyes to do</h1>
                            <p className="pt-1 text-[var(--normal-text)] text-sm lg:text-base xl:text-base md:text-base">An Addicted, Specialized, and Qualified to build UI/UX design for website  and mobile applications (Dealing with the front end part). I always work with the need to understand the benefits of the users, give them  something new to enjoy, and come close to new expectations in advance.</p>
                        </div>
                        <div className='flex flex-col gap-6'>
                            {ServiceData.map((item, index) => <ServiceCard key={item.id} {...item} />)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services