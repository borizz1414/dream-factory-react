import React from 'react'

import  Button from '@material-ui/core/Button'
import { Header } from './components/landing/header/Header'
import { SectionServices } from './components/landing/section-services/SectionServices'
import { Plans } from './components/landing/plans/Plans'
import { Blog } from './components/landing/blog/Blog'

export const DreamFactoryApp = () => {
    return (
        <>
           <Header />
           <SectionServices />
           <Plans />
           <Blog />
        </>
    )
}
