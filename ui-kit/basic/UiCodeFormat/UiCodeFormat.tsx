import cn from "classnames"

import styles from "./styles.module.css"

interface IProps {
  data: Object
  className?: string
}

const UiCodeFormat: React.FC<IProps> = (props) => {
  const { className, data } = props

  return (
    <pre className={cn(className, styles.code)}>
      <code>{JSON.stringify(data, null, 4)}</code>
    </pre>
  )
}

export default UiCodeFormat
