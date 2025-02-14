import { TTheme as TThemeMenuButton } from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"
import type { IMenuItem } from "@/sawyer-ui/types/common"

export interface IChildComponentProps {
  theme?: TThemeMenuButton
  list: IMenuItem[]
  onClose: () => void
}
