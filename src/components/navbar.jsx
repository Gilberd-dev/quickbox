import React, { useRef } from 'react'

const Navbar = () => {
    const hamburgerRef = useRef(null);
    const navMenuRef = useRef(null);
  
    const handleHamburgerClick = () => {
      // Menggunakan refs untuk mendapatkan referensi ke elemen
      const hamburgerElement = hamburgerRef.current;
      const navMenuElement = navMenuRef.current;
  
      // Melakukan manipulasi pada elemen berdasarkan kondisi
      if (hamburgerElement && navMenuElement) {
        hamburgerElement.classList.toggle('hamburger-active');
        navMenuElement.classList.toggle('hidden');
      }
    };

    // Fixed Mavbar

    const headerRef = useRef(null)
    window.onscroll = () => {
      const headerElement = headerRef.current;
      const fixedNav = headerElement.offsetTop;

      if (window.pageYOffset > fixedNav) {
        headerElement.classList.add('navbar-fixed')
      } else {
          headerElement.classList.remove('navbar-fixed')
      }
    }


  return (
    <header ref={headerRef} className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
            <div className="flex items-center justify-between relative">
                <div className="px-4">
                    <a href="#home" className="font-bold text-lg text-primary block py-6">QuickBox</a>
                </div>
                <div className="flex items-center px-4">
                    <button ref={hamburgerRef} id='hamburger' name="hamburger" type="button" className="block absolute right-4 lg:hidden" onClick={handleHamburgerClick}>
                        <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out"></span>
                        <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                    </button>
                    <nav id="nav-menu" ref={navMenuRef}
                        className="hidden absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
                        <ul className="block lg:flex">
                            <li className="group"><a href="#home"
                                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Home</a></li>
                            <li className="group"><a href="#about"
                                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">About</a></li>
                            <li className="group"><a href="#services"
                                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Services</a>
                            </li>
                            <li className="group"><a href="#partner"
                                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Partner</a></li>
                            <li className="group"><a href="#contact"
                                    className="text-base text-dark py-2 mx-8 flex group-hover:text-primary">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar