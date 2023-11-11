import { useRef } from 'react';
import './Navbar.css'

const Navbar = () => {
    const navRef = useRef(null);
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const handleLogout = () => {
        localStorage.removeItem("user")
        localStorage.removeItem("mobile")
        window.location = '/'
    }

    return (
        <header>
            <img className="logo" src="/Shield.png" alt="logo" />
            <nav ref={navRef} className='justify-content-between w-100'>
                <div className='left-side '>
                    <p className='me-5 mb-0'>Home</p>
                    <p className='me-5 mb-0'>Products</p>
                    <p className='me-5 mb-0'>About Us</p>
                    <p className='me-5 mb-0'>FAQ</p>
                    <p className='me-5 mb-0'>Contact Us</p>
                    <p className='me-5 mb-0' style={{ cursor: "pointer" }} onClick={handleLogout}>Log Out</p>
                </div>
                <div className="right-side justify-content-end">

                    <i className="fa-regular fa-bell" style={{ "color": "#ffffff", fontSize: "xx-large" }}></i>
                    <img className='face' src="/face.jpeg" alt="" />

                    <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                        <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <i className="fa-solid fa-bars"></i>
            </button>
        </header>
    );
};

export default Navbar
