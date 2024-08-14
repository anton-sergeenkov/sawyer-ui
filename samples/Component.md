# ⭐️ Props

```ts
interface IUiElementProps {
  className?: string
  children: React.ReactNode
}

const UiElement: React.FC<IUiElementProps> = (props) => {
  //
}
```

# ⭐️ Props Theme

```ts
import { ITheme } from "@/sawyer-react-lib/types/common"

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
}

interface IUiElementProps {
  theme?: ITheme<ThemeMode>
  className?: string
  children: React.ReactNode
}

const UiElement: React.FC<IUiElementProps> = (props) => {
  //
}
```

# ⭐️ Without Props

```ts
const UiElement: React.FC = () => {
  //
}
```

# ⭐️ index.ts

```ts
import { ThemeMode } from "./TypographyGradientElement"

export { default } from "./TypographyGradientElement"
export { ThemeMode }
```
