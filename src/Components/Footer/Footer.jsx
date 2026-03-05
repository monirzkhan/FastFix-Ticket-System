import React from 'react';

const Footer = () => {
    return (
        <footer className=" bg-neutral text-neutral-content md:px-20 p-10">
            <div className='footer sm:footer-horizontal my-4 py-8 border-b-1 border-b-gray-200'>
                <nav className='w-80 text-justify'>
                    <h6 className="footer-title text-2xl text-white">FastFix Ticket System</h6>
                    <span>FastFix is a smart and efficient customer support ticketing system designed to streamline issue tracking, improve response time, and ensure seamless communication between customers and support teams. We help businesses resolve problems faster and deliver better service experiences.</span>
                </nav>
                <nav>
                    <h6 className="footer-title text-xl">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>

                </nav>
                <nav>
                    <h6 className="footer-title text-white text-xl">Service</h6>
                    <a className="link link-hover text-neutral-content">Product & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>

                </nav>
                <nav>
                    <h6 className="footer-title text-white text-xl">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title text-white text-xl">Social Links</h6>
                    <a className="link link-hover"><i class="fa-brands fa-x-twitter"></i> @FastFix — Ticket System </a>
                    <a className="link link-hover"><i class="fa-brands fa-facebook"></i> @FastFix — Ticket System</a>
                    <a className="link link-hover"><i class="fa-brands fa-linkedin"></i> @FastFix — Ticket System</a>
                    <a className="link link-hover"><i class="fa-solid fa-envelope"></i> support@fastfix.com</a>
                </nav>
            </div>
            <div className='text-center my-8'>
                <span>© 2026 FastFix — Ticket System. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;