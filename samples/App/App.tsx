import cn from "classnames"

import styles from "./styles.module.css"

interface IProps {
  className?: string
}

const App: React.FC<IProps> = (props) => {
  const { className } = props

  return (
    <div className={styles.wrapper}>
      <div className={cn(className, styles.container, "section")}>Content</div>
    </div>
  )
}

export default App
