import {ModalImage} from "../ModalImage.jsx";
import modal from "../../assets/modals/modal-2.png";
import {BiSupport} from "react-icons/bi";
import {PiPackage} from "react-icons/pi";
import {TbDiscount2, TbTruckDelivery} from "react-icons/tb";
import {FaChartLine} from "react-icons/fa";

function OfferItem({icon, label}) {
    return (
        <div className="offer-item flex justify-center">
            <div className="icon-container flex-center">
                {icon}
            </div>
            <div className="label">{label}</div>
        </div>
    );
}

export const Offers = () => {
    let offers = [
        {
            icon: <BiSupport/>,
            label: "دعم مخصص"
        },
        {
            icon: <PiPackage/>,
            label: "منتجات عالية الجودة"
        },
        {
            icon: <TbTruckDelivery/>,
            label: "خيارات توزيع مرنة"
        },
        {
            icon: <TbDiscount2/>,
            label: "أسعار تنافسية"
        },
        {
            icon: <FaChartLine/>,
            label: "فرص نمو مستدام"
        },
    ];
    return (
        <section id="offers" className="offers">
            <div className="section-container flex">
                <div className="left">
                    <ModalImage modal={modal} type={"right"}/>
                </div>
                <div className="right">
                    <h1>نقدم لك العديد من السبل
                        لتحقيق النجاح</h1>
                    <p>ستمرارنا مرتبط بنجاحك، ونسعى دائمًا لدعم نجاحك ونمو عملك.
                        نحن نؤمن بأن نجاحك هو جزء أساسي من نجاحنا،
                        ونسعد بتقديم خدمات تلبي احتياجاتك وتساعدك في تحقيق أهدافك</p>

                    <div className="offers-container">
                        {offers.map(({icon, label}, index) => <OfferItem key={index} icon={icon} label={label}/>)}
                    </div>

                </div>
            </div>
        </section>
    )
}