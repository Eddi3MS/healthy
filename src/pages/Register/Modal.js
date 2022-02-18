import close from "../../assets/imgs/close.svg";
import { ModalSty } from "./Modal.styled";

function Modal({ closeModal }) {
  const handleClose = () => closeModal(false);

  const localData = localStorage.getItem("@healthy");
  const { name } = JSON.parse(localData);

  return (
    <ModalSty onClick={handleClose}>
      <div className="modal__content">
        <button onClick={handleClose} aria-label="close the modal">
          <img src={close} alt="close the modal" />
        </button>

        <h3>Welcome, {name}!!</h3>
        <p>We hope you'd enjoy our recipes and posts.</p>
        <p>Best regards, the Healthy Team.</p>
      </div>
    </ModalSty>
  );
}

export default Modal;
