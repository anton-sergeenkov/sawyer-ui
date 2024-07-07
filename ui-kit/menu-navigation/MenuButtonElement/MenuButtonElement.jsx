// import cn from 'classnames'

import { ButtonElement } from "@/sawyer-react-lib/ui-kit"

import { getStyles } from "./utils"

// import styles from "./MenuButtonElement.module.css"

// [UiKit]
// import { MenuButtonElement } from "@/sawyer-react-lib/ui-kit"
const PROPS = {
  theme: {
    mode: ["light-violet"],
  },
  isAccent: true,
  isActive: true,
  className: "",
  children: <></>,
  onClick: () => null,
  endIcon: () => null,
}

const MenuButtonElement = (props) => {
  const {
    theme,
    isAccent,
    isActive,
    className,
    children,
    onClick = null,
    endIcon = null,
  } = props

  const { stylesButton, stylesText } = getStyles(theme.mode, isAccent, isActive)

  return (
    <ButtonElement
      className={className}
      size="small"
      variant="filled"
      sx={stylesButton}
      onClick={onClick}
      endIcon={endIcon}
    >
      <span style={stylesText}>{children}</span>
    </ButtonElement>
  )
}

export default MenuButtonElement
