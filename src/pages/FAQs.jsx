import {FAQsItem} from "../components/FAQsItem.jsx";
import faqs from "../data/faqs.js";
import {AiFillStar} from "react-icons/ai";

export const FAQs = () => {
    return (
        <section className="section-faq">
            <div className="section-container">
                <div className="label">
                    <h2>الأسئلة الشائعة</h2>
                    <div className="ln">
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                </div>
                <div className="box">
                    <div className="form">
                        <div className="faq-list">
                            {faqs.map((faqObj, index) => <FAQsItem faq={faqObj} isOpen={index === 0} key={index}/>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}