import {BiSolidQuoteRight} from "react-icons/bi";
import modal from "../../assets/modals/modal-4.png";

export const Testimonials = () => {
    return (
        <section className="testimonial highlight">
            <div className="section-container">
                <h1>ما يقوله الأشخاص عنا</h1>
                <div className="comments-container flex">
                    <div className="comment-container">
                        <div className="image-container">
                            <img src={modal} alt="modal"/>
                        </div>
                        <p className="comment">
                            تعجبني جدًا الأسعار الرائعة التي تقدمها هذه الشركة. إن القدرة على الحصول على منتجات عالية الجودة بأسعار تنافسية كانت مفاجأة مذهلة. بجانب الأسعار الجيدة، يمكنني القول أن جودة المنتجات تفوق توقعاتي. إن توفير منتجات عالية الجودة هو ما يجعل هذه الشركة مميزة. أنا سعيد بتجربتي مع هذه الشركة وأتطلع إلى التعامل معها مرة أخرى في المستقبل.
                        </p>
                        <div className="icon-container">
                            <BiSolidQuoteRight/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}