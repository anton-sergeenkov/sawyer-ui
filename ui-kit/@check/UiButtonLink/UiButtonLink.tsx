import cn from "classnames";

import Button from "@mui/material/Button";

import styles from "./styles.module.css";

interface IProps {
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
  className?: string;
}

const UiButtonLink: React.FC<IProps> = (props) => {
  const { children, variant = "contained", className } = props;

  return (
    <Button
      className={cn(styles.button, className)}
      variant={variant}
      color="primary"
    >
      {children}
    </Button>
  );
};

export default UiButtonLink;

// import { Link } from "react-router-dom";
// <UiButtonLink>
//   <Link target="_blank" to={BASE_URL}>
//     Click here
//   </Link>
// </UiButtonLink>
