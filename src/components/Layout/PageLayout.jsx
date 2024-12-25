import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const PageLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout
