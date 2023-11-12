import conf from "../data/whatsapp.js";
export const CallToActionBtn = ({label}) => {
    const openURL = () => {
        const {whatsapp, message} = conf.accounts[0];
        const newURL = `https://wa.me/${whatsapp}?text=${message});`
        window.open(newURL)
    }
    return (
        <button onClick={openURL}>{label}</button>
    )
}