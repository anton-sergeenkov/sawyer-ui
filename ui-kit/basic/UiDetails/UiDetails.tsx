import styles from "./styles.module.css"

interface IProps {
  title: string
  children: React.ReactNode
  isOpen?: boolean
  className?: string
}

const UiDetails: React.FC<IProps> = (props) => {
  const { children, title, isOpen } = props

  return (
    <details className={styles.details} open={isOpen}>
      <summary className={styles.summary}>
        <div className={styles.title}>{title}</div>
      </summary>
      <div className={styles.content}>{children}</div>
    </details>
  )
}

export default UiDetails
