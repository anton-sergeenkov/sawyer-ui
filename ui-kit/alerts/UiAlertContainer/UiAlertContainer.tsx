"use client"

import UiAlert from "../UiAlert/UiAlert"
import type { IProps as IAlertProps } from "../UiAlert/UiAlert"

interface IProps extends IAlertProps {
  isShow: boolean
  setIsShow?: React.Dispatch<React.SetStateAction<boolean>>
}

export const UiAlertContainer: React.FC<IProps> = (props) => {
  const {
    // Alert
    type,
    variant,
    noSpacing,
    children,
    // Alert Container
    isShow,
    setIsShow,
  } = props

  if (!isShow) {
    return null
  }

  return (
    <>
      {isShow && (
        <UiAlert
          type={type}
          variant={variant}
          noSpacing={noSpacing}
          setIsShow={setIsShow}
        >
          {children}
        </UiAlert>
      )}
    </>
  )
}

export default UiAlertContainer
