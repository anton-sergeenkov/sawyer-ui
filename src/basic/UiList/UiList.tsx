import styles from "./styles.module.css"

interface IProps {
  items: string[] | React.ReactNode[]
  title?: string
}

const UiList: React.FC<IProps> = (props) => {
  const { items, title } = props

  const render = (
    <ul className={styles.list}>
      {items.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  )

  if (title) {
    return (
      <div>
        <div className={styles.header}>{title}</div>
        {render}
      </div>
    )
  }

  return render
}

export default UiList
