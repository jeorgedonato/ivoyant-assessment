import React from 'react'
import Header from './Header'

const Layout = ( { children } : { children: React.ReactNode } ) => {
    
    return (
        <>
            <Header/>
            <div className='flex flex-col m-0 min-h-screen scroll-smooth'>
                <div className='grow relative'>
                    {children}
                </div>
            </div>  
        </>
    )
}


export default Layout