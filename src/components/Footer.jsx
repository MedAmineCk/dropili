import {FaFacebookF} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {BsWhatsapp} from "react-icons/bs";

export const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="section-container flex justify-between">
                    <div className="logo"></div>
                    <h3>تواصل معنا عبر</h3>
                    <div className="social-medias">
                        <div className="icon flex-center">
                            <FaFacebookF/>
                        </div>
                        <div className="icon flex-center">
                            <AiOutlineInstagram/>
                        </div>
                        <div className="icon flex-center">
                            <BsWhatsapp/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-midle">
                <div className="section-container">
                    <div className="label">الروابط</div>
                    <div className="links">
                        <a href="#">حول</a>
                        <a href="#">المنتجات</a>
                        <a href="#">المشاريع</a>
                        <a href="#">المراجعات</a>
                        <a href="#">اتصل بنا</a>
                    </div>
                    <div className="custom-hr">
                    </div>
                    <div className="label">سياسات الموقع</div>
                    <div className="links">
                        <a href="#">شروط الاستخدام</a>
                        <a href="#">سياسة الخصوصية</a>
                        <a href="#">سياسة العائدات</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="section-container flex justify-center align-center">
                    &#xA9; جميع الحقوق محفوضة لصاحب الموقع 2023/2024
                </div>
            </div>
        </footer>
    )
}