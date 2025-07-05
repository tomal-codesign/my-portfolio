'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return null
}

export default AOSInit
