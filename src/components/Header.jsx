import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import {HiOutlineMail} from "react-icons/hi";
import {FiPhone} from "react-icons/fi";
import {useState} from "react";
import {CallToActionBtn} from "./CallToActionBtn.jsx";

export const Header = () => {

    const [navToggle, setNavToggle] = useState(false);
    const handleNavToggle = () => {
        setNavToggle(!navToggle)
    }

    const scrollToSection = ({section}) => {
        // You can adjust the duration as needed
        window.scrollTo({
            top: document.getElementById(section).offsetTop,
            behavior: 'smooth',
        });
    };

    return (
        <header>

            <div className="section-container flex justify-between align-center">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="dropili logo"/></Link>
                </div>
                <nav className={navToggle ? 'open' : ''}>
                    <ul>
                        <li><Link className="active" to="/">الصفحة
                            الرئيسية</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection({section: 'about-us'})}>من نحن</Link></li>
                        <li><Link to="/" onClick={() => scrollToSection({section: 'offers'})}>الخدمات</Link></li>
                        <li><Link to="/faqs">الأسئلة الشائعة</Link></li>
                    </ul>
                    <CallToActionBtn label="راسلنا"/>
                </nav>
            </div>

            <div className={`nav_tab_icon ${navToggle ? 'open' : ''}`} onClick={() => handleNavToggle()}>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
        </header>
    )
}