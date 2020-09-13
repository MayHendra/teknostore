import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../organism/Navbar'

import PhoneImg from '../assets/phone-illustration.png'

export default function Home() {
    return (
        <div>
            <Navbar searchVisible="false" />
            <main className="container mx-auto mt-8 md:mt-10 lg:mt-15 px-6 mb-10">
                <div className="flex flex-col-reverse items-center lg:flex-row lg:justify-center">
                    <div className="flex flex-col lg:w-2/5">
                        <div className="mt-8 px-4 md:px-16 lg:px-0 lg:mt-0">
                            <h3 className="tracking-wide text-center text-xl font-semibold break-words leading-loose md:text-4xl md:mt-5 lg:leading-relaxed lg:text-left lg:text-4xl">Tempat lengkap kebutuhan <span className="text-teal-600">Gadged</span> & macam - macam <span className="text-teal-600">Aksesoris Komputer.</span></h3>
                        </div>
                        <div className="flex justify-center mt-8 md:mt-10 lg:block lg:w-full lg:mt-12">
                            <Link className="px-10 py-2 bg-teal-600 rounded-lg text-white md:text-lg md:px-16 md:py-3" to="/belanja">Lihat sekarang</Link>
                        </div>
                    </div>
                    <div className="flex justify-center mt-5 lg:w-2/5 lg:justify-end lg:items-center">
                        <img className="w-40 md:w-56 lg:w-64 lg:w-auto" src={PhoneImg} alt="phone" />
                    </div>
                </div>
            </main>
        </div>
    )
}
