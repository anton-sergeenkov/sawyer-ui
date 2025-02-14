import MenuItem from "@mui/material/MenuItem"

import UiMenuNavButton from "@/sawyer-ui/ui-kit/menu/UiMenuNavButton"

import { IChildComponentProps } from "../../types/types"

import { styleMenuItem } from "../styles"
import styles from "./styles.module.css"

const ChildComponentLinks: React.FC<IChildComponentProps> = (props) => {
  const { theme, list, onClose } = props

  return (
    <>
      {list.map((element, index) => (
        <MenuItem key={index} onClick={onClose} sx={styleMenuItem}>
          <a className={styles.linkLinks} href={element.path} target="_blank">
            <UiMenuNavButton
              theme={theme}
              isAccent={false}
              isActive={false}
              disabled={!!element.disabled}
              isHoverTransparent={true}
              isTextLeft={true}
            >
              {element.title}
            </UiMenuNavButton>
          </a>
        </MenuItem>
      ))}
    </>
  )
}

export default ChildComponentLinks
