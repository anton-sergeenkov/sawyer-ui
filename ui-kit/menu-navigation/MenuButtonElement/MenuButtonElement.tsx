// import cn from 'classnames'
import UiButton from "@/sawyer-react-lib/ui-kit/basic/UiButton"
import { getStyles } from "./utils"
import { ITheme, TOnClick } from "@/sawyer-react-lib/types/common"

// import styles from "./styles.module.css"

export enum ThemeMode {
  LIGHT_BLUE = "light-blue",
}

interface IProps {
  className?: string
  children: React.ReactNode
  theme?: ITheme<ThemeMode>
  isAccent?: boolean
  isActive?: boolean
  isHoverTransparent?: boolean
  isTextLeft?: boolean
  disabled?: boolean
  endIcon?: React.ReactNode
  onClick?: TOnClick
}

const MenuButtonElement: React.FC<IProps> = (props) => {
  const {
    className,
    children,
    theme,
    isAccent,
    isActive,
    isHoverTransparent = false,
    isTextLeft = false,
    disabled = false,
    endIcon = null,
    onClick = () => null,
  } = props

  const { stylesButton, stylesText } = getStyles({
    mode: theme?.mode,
    isAccent,
    isActive,
    isHoverTransparent,
    isDisabled: disabled,
    isTextLeft,
  })

  return (
    <UiButton
      buttonProps={{
        className,
        sx: stylesButton,
        endIcon,
        disabled,
        onClick,
      }}
      variant="text"
      size="small"
    >
      <div style={stylesText}>{children}</div>
    </UiButton>
  )
}

export default MenuButtonElement
