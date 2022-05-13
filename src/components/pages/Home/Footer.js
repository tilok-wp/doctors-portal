import React from 'react';
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
                    <a className="link link-hover">Emergency Checkup</a>
                    <a className="link link-hover">Monthly Checkup</a>
                    <a className="link link-hover">Weekly Checkup</a>
                    <a className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a className="link link-hover">Fluoride Treatment</a>
                    <a className="link link-hover">Cavity Filling</a>
                    <a className="link link-hover">Teath Whitening</a>

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