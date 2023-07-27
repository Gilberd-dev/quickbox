import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12">
        <div className="container">
            <div className="flex flex-wrap">
                <div className="w-full px-4 mb-12 text-slate-300 font-medium md:w-1/3">
                    <h2 className="font-bold text-4xl text-white mb-5">QuickBox</h2>
                    <h3 className="font-bold text-2xl mb-2">Reach Out</h3>
                    <p>QuickBox@gmail.com</p>
                    <p>Jl. Makadame Raya No.08</p>
                    <p>Siantar</p>
                </div>
                <div className="w-full px-4 mb-12 md:w-1/3">
                    <h3 className="font-semibold text-xl text-white mb-6">Contact Us</h3>
                    <ul className="text-slate-300">
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3"> WhatsApp</a>
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Instagram</a>
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Facebook</a>
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Threads</a>
                        </li>
                    </ul>
                </div>
                <div className="w-full px-4 mb-12 md:w-1/3">
                    <h3 className="font-semibold text-xl text-white mb-6">Links</h3>
                    <ul className="text-slate-300">
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Home</a>
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">About</a>
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Services</a>
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Partner</a>
                        </li>
                        <li>
                            <a href="#" className="inline-block text-base hover:text-primary mb-3">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer