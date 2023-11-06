import { Link } from 'react-router-dom';
import logo from '..//assets/img/logo/logo.png'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-100 text-black font-medium">
            <aside>
                <img className='w-3/5 ml-6' src={logo} alt="" />
                <p className='ml-20'>TRAVELNEST Hotel & Tourism Ltd.<br />Providing reliable Hotel, Travel & Tourism since 2010</p>
            </aside>
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <Link className="link link-hover">Location</Link>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;