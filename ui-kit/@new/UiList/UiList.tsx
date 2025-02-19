import { UiTypography } from "@/ui-kit/index";

import styles from "./styles.module.css";

interface IProps {
  items: string[] | React.ReactNode[];
  title?: string;
}

const UiList: React.FC<IProps> = (props) => {
  const { items, title } = props;

  const render = (
    <ul className={styles.list}>
      {items.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );

  if (title) {
    return (
      <div>
        <UiTypography tag="comment" className={styles.header}>
          {title}
        </UiTypography>
        {render}
      </div>
    );
  }

  return render;
};

export default UiList;

// <UiList items={list} />
