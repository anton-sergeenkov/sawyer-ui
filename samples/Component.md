# ⭐️ Props

```ts
interface IUiElement {
  className?: string
  children: React.ReactNode
}

const UiElement: React.FC<IUiElement> = (props) => {
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

interface IUiElement {
  theme?: ITheme<ThemeMode>
  className?: string
  children: React.ReactNode
}

const UiElement: React.FC<IUiElement> = (props) => {
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
