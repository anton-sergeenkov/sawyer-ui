import MUIButton from "@mui/material/Button"

interface IProps {
  title: string
  variant: "text" | "outlined" | "contained"
}

export const UiButton = ({ title, variant }: IProps) => {
  // export const UiButton: React.FC<IProps> = (props) => {
  //   const { title, variant } = props

  return (
    <MUIButton onClick={() => console.log("Hello")} variant={variant}>
      {title}
    </MUIButton>
  )
}
