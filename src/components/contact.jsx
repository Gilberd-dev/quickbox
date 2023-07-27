import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="pt-36 pb-32">
        <div className="container">
            <div className="w-full px-4">
                <div className="max-w-xl mx-auto text-center mb-16">
                    <h4 className="font-semibold text-lg text-primary mb-2">Contact</h4>
                    <h2 className="font-bold text-dark text-3xl mb-4 sm:text-4xl lg:text-5xl">Talk About Us</h2>
                    <p className="font-medium text-md text-secondary md:text-lg">Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Repudiandae, labore.</p>
                </div>
            </div>
            <form>
                <div className="w-full lg:w-2/3 lg:mx-auto">
                    <div className="w-full px-4 mb-8">
                        <label for="name" className="text-base text-primary font-bold">Name</label>
                        <input type="text" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                    </div>
                    <div className="w-full px-4 mb-8">
                        <label for="email" className="text-base text-primary font-bold">Email</label>
                        <input type="email" id="name" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"/>
                    </div>
                    <div className="w-full px-4 mb-8">
                        <label for="message" className="text-base text-primary font-bold">Message</label>
                        <textarea id="message" cols="30" rows="10" className="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary h-32"></textarea>
                    </div>
                    <div className="w-full px-4">
                        <button className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-300">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </section>
    )
}

export default Contact