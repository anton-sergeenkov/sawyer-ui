import MUIButton from "@mui/material/Button"

// import styles from "./Button.module.css"

const Button = (props) => {
  return <MUIButton {...props}>{props.children}</MUIButton>
}

export default Button
