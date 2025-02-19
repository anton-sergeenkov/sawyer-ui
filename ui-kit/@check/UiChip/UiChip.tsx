import cn from "classnames";
import Chip from "@mui/material/Chip";

import styles from "./styles.module.css";

interface IProps {
  type?: "success" | "error";
  label: string;
  className?: string;
}

const UiChip: React.FC<IProps> = (props) => {
  const { label, type, className } = props;

  switch (type) {
    case "success":
      return (
        <Chip
          className={cn(styles.chip, styles.success, className)}
          label={label}
          // color="success"
        />
      );
    case "error":
      return (
        <Chip
          className={cn(styles.chip, styles.error, className)}
          label={label}
          // color="error"
        />
      );
    default:
      return <Chip className={cn(styles.chip, className)} label={label} />;
  }
};

export default UiChip;

// <UiChip label="Reviewed" type="success" />
