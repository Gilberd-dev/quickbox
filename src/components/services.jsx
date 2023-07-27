import React from 'react'
import drone from '../images/drone.png'
import express from '../images/expresss.jpg'
import packing from '../images/packingg.jpg'
import ship from '../images/shipp.jpg'

const Services = () => {
  return (
    <section id="servoces" className="pt-36 pb-32 bg-sky-50">
    <div className="container">
        <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
                <h4 className="font-semibold text-lg text-primary mb-2">Services</h4>
                <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-3xl">We Provide the Best Services </h2>
                <p className="font-medium text-md text-secondary md:text-lg">We are proud to provide a wide range of quality freight forwarding services to meet your logistics needs</p>
            </div>
        </div>

        <div className="flex flex-wrap">
            <div className="full px-4 lg:w-1/2 xl:w-1/4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <img src={express} alt="" className="w-full" />
                    <div className="py-8 px-6">
                        <h3><a href="#"
                                className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Express Delivery</a></h3>
                        <p className="font-medium text-base text-secondary mb-6">We'll pick up your goods and prioritize their delivery, ensuring high-speed transit without compromising on safety or service quality</p>
                    </div>
                </div>
            </div>
            <div className="full px-4 lg:w-1/2 xl:w-1/4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <img src={ship} alt="" className="w-full" />
                    <div className="py-8 px-6">
                        <h3><a href="#"
                                className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Worldwide Shipping</a></h3>
                        <p className="font-medium text-base text-secondary mb-6">No boundaries hold us back. With a robust logistics network, we are ready to ship your items to various destinations across the globe. </p>
                    </div>
                </div>
            </div>
            <div className="full px-4 lg:w-1/2 xl:w-1/4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <img src={drone} alt="" className="w-full" />
                    <div className="py-8 px-6">
                        <h3><a href="#"
                                className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Drone Delivery Service</a></h3>
                        <p className="font-medium text-base text-secondary mb-6"> We offer drone delivery services to address logistical challenges in remote areas and expedite shipments within a designated radius. </p>
                    </div>
                </div>
            </div>
            <div className="full px-4 lg:w-1/2 xl:w-1/4">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-10">
                    <img src={packing} alt="" className="w-full" />
                    <div className="py-8 px-6">
                        <h3><a href="#"
                                className="block mb-3 font-semibold text-xl text-dark hover:text-primary truncate">Professional Packing</a></h3>
                        <p className="font-medium text-base text-secondary mb-6">We firmly believe that customer satisfaction is our top priority. With a dedicated team, advanced technology, and high-quality service</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Services