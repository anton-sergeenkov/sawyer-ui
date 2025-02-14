import MenuItem from "@mui/material/MenuItem"
import UiMenuItemRoutes from "@/sawyer-ui/ui-kit/menu/UiMenuItemRoutes"

import { IChildComponentProps } from "../../types/types"

import { styleMenuItem } from "../styles"
import styles from "./styles.module.css"

const ChildComponentRoutes: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {list.map((element, index) => (
        <div className={styles.linkRoutes} key={index}>
          <MenuItem onClick={onClose} sx={styleMenuItem}>
            <UiMenuItemRoutes theme={theme} item={element} isTextLeft={true} />
          </MenuItem>
        </div>
      ))}
    </>
  )
}

export default ChildComponentRoutes
