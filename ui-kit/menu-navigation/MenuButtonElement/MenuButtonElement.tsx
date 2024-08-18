// import cn from 'classnames'
import ButtonElement from "@/sawyer-react-lib/ui-kit/basic/ButtonElement"
import { getStyles } from "./utils"
import { ITheme, TOnClick } from "@/sawyer-react-lib/types/common"
// import styles from "./MenuButtonElement.module.css"

export enum ThemeMode {
  LIGHT_VIOLET = "light-violet",
}

interface IMenuButtonElementProps {
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

const MenuButtonElement: React.FC<IMenuButtonElementProps> = (props) => {
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

  /* FIXME: filled
  variant="filled" нет в API
  Добавляется класс .MuiButton-filled. Класс ни на что не влияет
  Eсли убрать, то сбиваются стили в Меню
  */

  return (
    <ButtonElement
      buttonProps={{
        className,
        size: "small",
        // variant="filled"
        sx: stylesButton,
        endIcon,
        disabled,
        onClick,
      }}
    >
      <div style={stylesText}>{children}</div>
    </ButtonElement>
  )
}

export default MenuButtonElement
