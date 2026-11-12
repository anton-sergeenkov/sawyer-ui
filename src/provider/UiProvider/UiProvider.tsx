import { CloseButton, MantineProvider, createTheme } from "@mantine/core"
import { X } from "@phosphor-icons/react"

// https://mantine.dev/theming/mantine-provider/

// Тема Mantine для компонентов sawyer-ui
const theme = createTheme({
  // Шрифт компонентов Mantine (поля ввода и т.п.). Сам Roboto приложение
  // подключает через sawyer-ui/fonts
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  // Кнопки не сдвигаются вниз при нажатии
  activeClassName: "",
  components: {
    // Крестик закрытия во всех компонентах Mantine (например, в UiAlert) — иконка Phosphor
    CloseButton: CloseButton.extend({
      defaultProps: {
        icon: <X weight="bold" />,
      },
    }),
  },
})

interface IProps {
  children: React.ReactNode
}

// Провайдер Mantine с темой sawyer-ui. Без него компоненты пакета не работают:
// приложение оборачивает в него содержимое корневого layout
const UiProvider: React.FC<IProps> = (props) => {
  const { children } = props

  return (
    // У ui-kit только светлая тема, поэтому она задана жёстко
    // и не зависит от системных настроек
    <MantineProvider theme={theme} forceColorScheme="light">
      {children}
    </MantineProvider>
  )
}

export default UiProvider
