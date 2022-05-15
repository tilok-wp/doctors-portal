import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className="pt-24" style={{
            background: `url(${footerBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'

        }}>
            <div className='footer container mx-auto'>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <Link to='/' className="link link-hover">Emergency Checkup</Link>
                    <Link to='/' className="link link-hover">Monthly Checkup</Link>
                    <Link to='/' className="link link-hover">Weekly Checkup</Link>
                    <Link to='/' className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to='/' className="link link-hover">Fluoride Treatment</Link>
                    <Link to='/' className="link link-hover">Cavity Filling</Link>
                    <Link to='/' className="link link-hover">Teath Whitening</Link>

                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <p>New York - 101010 Hudson</p>
                </div>

            </div>
            <div className="footer footer-center py-10 mt-10">
                <p>Copyright 2022 All Rights Reserved</p>

            </div>
        </footer>
    );
};

export default Footer;