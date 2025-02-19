import { useEffect, useState } from "react"
import { Alert } from "@mui/material"

type TVariant = "text" | "outlined" | "contained"

export const AlertProps = {
  sx: { width: "100%" },
  variant: "outlined" as TVariant,
  //   variant: "filled",
}

interface IProps {
  type: "success" | "info" | "warning" | "error"
  isShow: boolean
  children: React.ReactNode
}

export const UiAlertContainer: React.FC<IProps> = (props) => {
  const { type, isShow, children } = props

  const [showAlert, setShowAlert] = useState<boolean>(false)

  useEffect(() => {
    setShowAlert(isShow)
  }, [isShow])

  if (!isShow) {
    return null
  }

  return (
    <>
      {showAlert && (
        <Alert
          severity={type}
          onClose={() => setShowAlert(false)}
          {...AlertProps}
        >
          {children}
        </Alert>
      )}
    </>
  )
}

export default UiAlertContainer

// <UiAlertContainer type="success" isShow={isSuccess}>
//   Data
// </UiAlertContainer>
