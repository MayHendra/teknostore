import React, { useState } from 'react'

import teknoLogo from '../assets/teknostore-darker.svg'
import { Link } from 'react-router-dom'

export default function Navbar({ searchVisible }) {

    const [active, setActive] = useState(false)

    const onClickToogleActive = () => {
        setActive(!active)
    }
    return (
        <nav className="shadow py-4">
            <div className="container mx-auto px-6 md:px-10 md:flex md:justify-between">
                <div className="flex justify-between">
                    <div className="flex justify-between items-center">
                        <Link to="/">
                            <img src={teknoLogo} alt="teknostore-logo" />
                        </Link>
                        {/* <Link className="font-medium ml-10" to="/shop">Shop</Link> */}
                    </div>
                    <button className="focus:outline-none md:hidden" onClick={onClickToogleActive}>
                        <svg className="w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
                {
                    searchVisible === true ?
                        <div className="relative hidden md:block w-3/12">
                            <input type="text" name="search" id="search" className="tracking-wide md:mr-5 md:border md:rounded-full md:py-2 md:pl-6 md:pr-10 md:focus:outline-none md:text-sm md:w-full" placeholder="Cari disini . . ." />
                            <div className="absolute top-0 right-0">
                                <svg className="fill-current w-5 text-gray-800 mr-4 mt-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        : ''
                }
                <div className="hidden md:flex md:justify-between md:items-center">
                    <div className="flex mr-3 md:mr-0">
                        <Link to="/masuk" className="px-4 py-1 mr-4 text-gray-800 border rounded-md font-medium tracking-wider">Masuk</Link>
                        <Link to="/daftar" className="px-4 py-1 text-gray-800 border rounded-md font-medium tracking-wider">Daftar</Link>
                    </div>
                </div>
                {
                    active === true ?
                        <div className="flex flex-col items-end mt-3 md:hidden">
                            {/* <div className="flex flex-col md:flex-row">
                                <a href="#" className="block py-4 font-medium text-gray-800 hover:text-gray-900">Tentang</a>
                                <a href="#" className="block py-4 font-medium text-gray-800 hover:text-gray-900">Beranda</a>
                            </div> */}
                            <div className="flex">
                                <Link to="/masuk" className="px-4 py-1 mr-4 text-gray-800 border rounded-md font-medium">Masuk</Link>
                                <Link to="/daftar" className="px-4 py-1 text-gray-800 border rounded-md font-medium">Daftar</Link>
                            </div>
                        </div>
                        : ''
                }
            </div>
        </nav>
    )
}
