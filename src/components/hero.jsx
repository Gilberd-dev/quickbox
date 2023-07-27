import React from 'react'
import hero_img from '../pict/hero-img.png'
import "./style.css";
import Tesmodal from './tesmodal';
import { ConfirmToast } from 'react-confirm-toast';

const Hero = () => {

    return (
        <section id="home" className="mt-28">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="w-full self-center px-4 lg:w-1/2">
                        <h1 className="text-base font-semibold text-primary md:text-xl">
                            <span className="block font-bold text-dark text-4xl mt-1 lg:text-5xl">
                                QuickBox</span> </h1>
                        <h2 className="font-medium text-secondary text-lg mb-5 lg:text-2xl">Delivery</h2>
                        <p className="font-medium text-secondary mb-10 leading-relaxed">Efficient Shipping : Seamlessly Connecting Your Goods to the World.</p>
                        <ConfirmToast
                            asModal={true}
                            childrenClassName='margin-top-10'
                            customCancel='No, Later'
                            customConfirm='Yes, Now'
                            customFunction={Tesmodal}
                            message='Want to Send Items?'
                            position='top-left' //will be ignored cause asModal=true
                            showCloseIcon={false}
                            theme='snow'
                        >
                            <button type="button" className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-80 transition duration-300 ease-in-out" onClick={() => setShowModal(true)}>
                                Get Started
                            </button>
                        </ConfirmToast>
                    </div>
                    <div className="w-full self-end px-4 lg:w-1/2">
                        <div className="relative mt-10 lg:mt-9 lg:right-0">
                            <img src={hero_img} alt="" className="max-w-full mx-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero