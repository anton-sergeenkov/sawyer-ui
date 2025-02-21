import { useEffect, useState } from "react"
import { Alert } from "@mui/material"

// type TVariant = "outlined" | "standard" | "filled"
type TType = "success" | "info" | "warning" | "error"

interface IProps {
  type: TType
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
          variant="outlined"
          sx={{ width: "100%" }}
        >
          {children}
        </Alert>
      )}
    </>
  )
}

export default UiAlertContainer

// const [isSuccess, setIsSuccess] = useState<boolean>(false)

// <UiAlertContainer type="success" isShow={isSuccess}>
//   Data
// </UiAlertContainer>
