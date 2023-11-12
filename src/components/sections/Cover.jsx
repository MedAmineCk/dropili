import modal from "../../assets/modals/modal-1.png"
import {ModalImage} from "../ModalImage.jsx";
import {CallToActionBtn} from "../CallToActionBtn.jsx";

export const Cover = () => {

    return (
        <section id="cover" className="cover">
            <div className="section-container flex">
                <div className="left">
                    <h1>كنتي خدام فالتجارة الالكترونية أو عندك
                        محل أو فراشة ؟</h1>
                    <p>من اليوم ما غاتحتاجش تمشي حتى للدار البيضاء
                        باش تجيب السلعة ديالك دروبيلي تتكلفليك بكولشي</p>
                    <CallToActionBtn label="ابدأ الآن"/>
                    <div className="data flex">
                        <div className="data-item">
                            <div className="number">100+</div>
                            <div className="label">عميل</div>
                        </div>
                        <div className="data-item">
                            <div className="number">100+</div>
                            <div className="label">منتج</div>
                        </div>
                        <div className="data-item">
                            <div className="number">10+</div>
                            <div className="label">مدن</div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <ModalImage modal={modal}/>
                </div>
            </div>
        </section>
    )
}