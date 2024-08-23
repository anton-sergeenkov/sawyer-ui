import cn from "classnames"

import styles from "./App.module.css"

interface IAppProps {
  className?: string
}

const App: React.FC<IAppProps> = (props) => {
  const { className } = props

  return (
    <div className={styles.wrapper}>
      <div className={cn(styles.container, "section")}>Content</div>
    </div>
  )
}

export default App
