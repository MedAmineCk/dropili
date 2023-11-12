import * as PropTypes from "prop-types";

 export const ModalImage = ({modal, type}) =>  {
     const customStyle = (type === "right") ? {borderRadius: "0 200px"} :  {borderRadius: "200px 0"}
    return (
        <div className="modal-container flex-center" style={customStyle}>
            <img src={modal} alt="smiling girl high five"/>
        </div>
    );
}

ModalImage.propTypes = {modal: PropTypes.any};