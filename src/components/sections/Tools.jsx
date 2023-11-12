import {ModalImage} from "../ModalImage.jsx";
import modal from "../../assets/modals/modal-3.png";
import {BsCheckLg} from "react-icons/bs";

function ToolItem({icon, label}) {
    return (
        <div className="offer-item flex justify-center">
            <div className="icon-container flex-center">
                {icon}
            </div>
            <div className="label">{label}</div>
        </div>
    );
}

export const Tools = () => {
    let tools = [
        {
            icon: <BsCheckLg/>,
            label: "وكالة الإعلانات"
        },
        {
            icon: <BsCheckLg/>,
            label: "إنشاء المتاجر"
        },
        {
            icon: <BsCheckLg/>,
            label: "كتابة النصوص"
        },
        {
            icon: <BsCheckLg/>,
            label: "أبحاث المنتجات"
        },
        {
            icon: <BsCheckLg/>,
            label: "محتوى الفيديو"
        },
    ];
    return (
        <section id="tools" className="tools">
            <div className="section-container flex">
                <div className="left">
                    <h1>سنعالج جميع احتياجاتك</h1>
                    <p>نقدم مجموعة واسعة من الخدمات لمساعدتك على تحقيق نجاح أعمالك.</p>
                    <div className="tools-container">
                        {tools.map(({icon, label}, index) => <ToolItem key={index} icon={icon} label={label}/>)}
                    </div>
                </div>
                <div className="right">
                    <ModalImage modal={modal}/>
                </div>
            </div>
        </section>
    )
}