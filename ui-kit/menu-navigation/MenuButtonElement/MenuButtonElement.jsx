// import cn from 'classnames'
import { ButtonElement } from "@/sawyer-react-lib/ui-kit"
import { getStyles } from "./utils"
// import styles from "./MenuButtonElement.module.css"

const PROPS = {
  theme: {
    mode: ["light-violet"],
  },
  isAccent: true,
  isActive: true,
  className: "",
  children: <></>,
  disabled: true,
  isHoverTransparent: true,
  isTextLeft: true,
  onClick: () => null,
  endIcon: () => null,
}

// interface ITheme {
//   // mode: ["light-violet"],
//   mode: string[]
// }

// interface IMenuButtonElementProps {
//   theme: ITheme
//   isAccent: boolean
//   isActive: boolean
//   className: string
//   children: React.ReactNode
//   disabled: boolean
//   isHoverTransparent: boolean
//   isTextLeft: boolean
//   // Button Props
// }

const MenuButtonElement = (props) => {
  const {
    theme,
    isAccent,
    isActive,
    className,
    children,
    onClick = null,
    endIcon = null,
    disabled = false,
    isHoverTransparent = false,
    isTextLeft = false,
  } = props

  const { stylesButton, stylesText } = getStyles({
    mode: theme.mode,
    isAccent,
    isActive,
    isHoverTransparent,
    isDisabled: disabled,
    isTextLeft,
  })

  return (
    <ButtonElement
      className={className}
      size="small"
      variant="filled"
      sx={stylesButton}
      onClick={onClick}
      endIcon={endIcon}
      disabled={disabled}
    >
      <div style={stylesText}>{children}</div>
    </ButtonElement>
  )
}

export default MenuButtonElement
