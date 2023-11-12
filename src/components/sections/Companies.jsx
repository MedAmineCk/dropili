import img_1 from "../../assets/companies/1.png"
import img_2 from "../../assets/companies/2.png"
import img_3 from "../../assets/companies/3.png"
import img_4 from "../../assets/companies/4.png"

export const Companies = () => {
    return (
        <section className="companies">
            <div className="section-container">
                <div className="companies-container">
                    <div className="company-item">
                        <img src={img_1} alt="company 1"/>
                    </div>
                    <div className="company-item">
                        <img src={img_2} alt="company 2"/>
                    </div>
                    <div className="company-item">
                        <img src={img_3} alt="company 3"/>
                    </div>
                    <div className="company-item">
                        <img src={img_4} alt="company 4"/>
                    </div>
                </div>
            </div>
        </section>
    )
}