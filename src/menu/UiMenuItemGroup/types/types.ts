import type { TTheme as TThemeMenuButton } from "../../UiMenuNavButton"
import type { IMenuItem } from "../../../types/common"

export interface IChildComponentProps {
  theme?: TThemeMenuButton
  list: IMenuItem[]
  onClose: () => void
}
