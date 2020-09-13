import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../organism/Navbar'

import PhoneImg from '../assets/phone-illustration.png'

export default function Home() {
    return (
        <div>
            <Navbar searchVisible="false" />
            <main className="container mx-auto mt-8 md:mt-15 px-6">
                <div className="flex flex-col-reverse items-center md:flex-row md:justify-around">
                    <div className="flex flex-col md:w-2/5 md:ml-24">
                        <div className="mt-8">
                            <h3 className="tracking-wide text-center text-xl font-semibold break-words leading-loose md:leading-relaxed md:text-left md:text-4xl">Tempat lengkap kebutuhan <span className="text-teal-600">Gadged</span> & macam - macam <span className="text-teal-600">Aksesoris Komputer.</span></h3>
                        </div>
                        <div className="flex justify-center mt-1 md:block md:w-full md:mt-8">
                            <Link className="px-16 py-3 bg-teal-600 rounded-lg text-white" to="/belanja">Lihat sekarang</Link>
                        </div>
                    </div>
                    <div className="flex justify-center mt-8 md:w-2/5 md:justify-center md:items-center">
                        <img className="w-64 md:w-auto" src={PhoneImg} alt="phone" />
                    </div>
                </div>
            </main>
        </div>
    )
}
