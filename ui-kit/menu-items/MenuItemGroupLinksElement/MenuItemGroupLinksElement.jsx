"use client"

// import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined'
import MenuItem from "@mui/material/MenuItem"

import { ButtonElement, MenuToggleElement } from "@/sawyer-react-lib/ui-kit"

import styles from "./MenuItemGroupLinksElement.module.css"

const ChildComponent = (props) => {
  const { theme, list, handleClose } = props

  return (
    <>
      {list.items.map((itemMenu, indexMenu) => (
        <MenuItem
          key={indexMenu}
          onClick={handleClose}
          sx={{
            padding: 0,
            margin: 0,
            minHeight: "auto",
            cursor: "default",
          }}
        >
          <ButtonElement
            size="small"
            fullWidth
            variant="text"
            disabled={itemMenu.disabled}
            // endIcon={<OpenInNewOutlinedIcon className={styles.icon} />}
            sx={{
              textTransform: "none",
              color: "#2b2b2b",
              justifyContent: "start",
              padding: "5px 10px",
              fontFamily: "var(--font-roboto-light)",
            }}
          >
            {!itemMenu.disabled ? (
              <a className={styles.link} href={itemMenu.path} target="_blank">
                {itemMenu.title}
              </a>
            ) : (
              <span>{itemMenu.title}</span>
            )}
          </ButtonElement>
        </MenuItem>
      ))}
    </>
  )
}

const MenuItemGroupLinksElement = (props) => {
  const { theme, list, title, isAccent, className } = props

  return (
    <MenuToggleElement
      className={className}
      theme={theme}
      list={list}
      title={title}
      isAccent={isAccent}
      Component={ChildComponent}
    />
  )
}

export default MenuItemGroupLinksElement
