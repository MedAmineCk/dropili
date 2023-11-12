import world from "../../assets/icons/world.svg"
import products from "../../assets/icons/products.svg"
import support from "../../assets/icons/support.svg"
import packages from "../../assets/icons/packages.svg"
import delivery from "../../assets/icons/delivery.svg"
import money from "../../assets/icons/money.svg"
import bgImage from "../../assets/world.svg"

export const AboutUs = () => {
    return (
        <section id="about-us" className="about-us" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className="section-container">
                <h1>تمكن الجميع من بدء و تطوير و توسيع التجارة الإلكترونية
                    و التقليدية في جميع أنحاء المغرب</h1>
                <div className="icons">
                    <div className="icon-item">
                        <img src={world} alt="world icon"/>
                    </div>
                    <div className="icon-item">
                        <img src={products} alt="products icon"/>
                    </div>
                    <div className="icon-item">
                        <img src={support} alt="support icon"/>
                    </div>
                    <div className="icon-item">
                        <img src={packages} alt="packages icon"/>
                    </div>
                    <div className="icon-item">
                        <img src={delivery} alt="delivery icon"/>
                    </div>
                    <div className="icon-item">
                        <img src={money} alt="money icon"/>
                    </div>
                </div>
            </div>
        </section>
    )
}