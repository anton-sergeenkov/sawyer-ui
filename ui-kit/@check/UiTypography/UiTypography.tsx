import cn from "classnames";

import styles from "./styles.module.css";

interface IProps {
  tag: "h2" | "h3" | "comment";
  children: React.ReactNode;
  noSpacing?: boolean;
  className?: string;
}

const UiTypography: React.FC<IProps> = (props) => {
  const { children, tag, className, noSpacing = false } = props;

  const classNoSpacing = noSpacing ? styles.noSpacing : "";

  switch (tag) {
    case "h2":
      return (
        <h2 className={cn(styles.h2, classNoSpacing, className)}>{children}</h2>
      );
    case "h3":
      return (
        <h3 className={cn(styles.h3, classNoSpacing, className)}>{children}</h3>
      );
    case "comment":
      return (
        <div className={cn(styles.comment, classNoSpacing, className)}>
          {children}
        </div>
      );
    default:
      return <span className={cn(classNoSpacing, className)}>{children}</span>;
  }
};

export default UiTypography;

// <UiTypography tag="h3" noSpacing>
//   Final Review Score
// </UiTypography>
