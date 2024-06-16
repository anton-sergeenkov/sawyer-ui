import MUIModal from "@mui/material/Modal";

// import styles from "./Button.module.css"

const Modal = (props) => {
  return <MUIModal {...props}>{props.children}</MUIModal>;
};

export default Modal;
