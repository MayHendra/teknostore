import React from 'react'
import Navbar from '../organism/Navbar'

export default function Shop() {
    return (
        <div>
            <Navbar searchVisible={true} />
            <div className="container mx-auto px-6 mt-8">
                Shop
            </div>
        </div>
    )
}
