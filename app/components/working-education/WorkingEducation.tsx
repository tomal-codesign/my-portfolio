import React from 'react'
import EducationCard from './education-card/EducationCard'
import intellier from '../../../public/images/workign-logo.png'

const WorkingEducation = () => {
    return (
        <>
            <div className='pt-8'>
                <div className='container mx-auto px-4'>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div data-aos="fade-up" className='custom-spotlight-card bg-white/40 p-[30px] lg:p-[40px] p-4 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg'>
                            <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[40px] font-extrabold">Working</h1>
                            <p className="pt-1 text-[var(--normal-text)] text-sm lg:text-base xl:text-base md:text-base">Code that speaks. Design that connects</p>
                            <div className='flex flex-col lg:pt-10 pt-6 gap-4'>
                                <EducationCard icon="material-symbols-light:home-work-outline" company="Intellier Limited" designation="Frontend Developer" duration="2022 - Present" />
                                <EducationCard icon="material-symbols-light:home-work-outline" company="G-soft" designation="Web Designer (Remote)" duration="Jan 2021 - Feb 2022" />
                            </div>
                        </div>
                        <div data-aos="fade-up" className='custom-spotlight-card bg-white/40 p-[30px] lg:p-[40px] p-4 border border-[#fff]/80 rounded-[46px] backdrop-blur-lg'>
                            <h1 className="text-[var(--normal-text)] text-[20px] lg:text-[40px] font-extrabold">Education</h1>
                            <p className="pt-1 text-[var(--normal-text)] text-sm lg:text-base xl:text-base md:text-base">Where academic foundation meets real-world implementation</p>
                            <div className='flex flex-col lg:pt-10 pt-6 gap-4'>
                                <EducationCard icon="fluent-mdl2:education" company="Sonargaon University" designation="B.Sc. in CSE" duration="Jan 2023 - Present" />
                                <EducationCard icon="fluent-mdl2:education" company="Rangpur Polytechnic Institute" designation="Diploma (CSE)" duration="Jan 2023 - Present" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkingEducation