import cn from "classnames";

import styles from "./Chip.module.css";

const Chip = (props) => {
  const { className, children } = props;

  return <span className={cn(styles.item, className)}>{children}</span>;
};

export default Chip;
