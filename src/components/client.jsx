import React from 'react'
import alibaba from '../images/alibaba.png'
import amazon from '../images/amazon.svg'
import blibli from '../images/blibli.png'
import bukalapak from '../images/bukalapak.png'
import ebay from '../images/ebay.png'
import evergreen from '../images/evergreen.png'
import lazada from '../images/lazada.svg'
import shopee from '../images/shopee.png'
import tokopedia from '../images/tokopedia.png'

const Client = () => {
  return (
    <section id="partner" className="pt-36 pb-32 bg-sky-950">
        <div className="container">
            <div className="w-full px-4">
                <div className="mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Partner</h4>
                    <h2 className="font-bold text-white text-3xl mb-4 sm:text-4xl lg:text-5xl">Successful Partnerships</h2>
                    <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsam asperiores ex quo.</p>
                </div>
            </div>
            <div className="w-full px-4">
                <div className="flex flex-wrap items-center justify-center">
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={alibaba} alt="Alibaba"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={amazon} alt="Amazon"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={blibli} alt="Blibli"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={bukalapak} alt="Bukalapak"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={ebay} alt="Bukalapak"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={evergreen} alt="Bukalapak"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={lazada} alt="Bukalapak"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={shopee} alt="Bukalapak"/></a>
                    <a href=""
                        className="max-w-[120px] mx-4 py-4 grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8"><img
                            src={tokopedia} alt="Bukalapak"/></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Client