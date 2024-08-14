## ⭐️ FIXME

**Формат импорта из Ui-Kit с полным путем**

```js
import { TypographyElement } from "@/sawyer-react-lib/ui-kit"

import {
    TypographyElement,
    ITypographyElement,
    constants
} from "@/sawyer-react-lib/ui-kit/basic/TypographyElement"
```

**Button variant="filled"**

> ui-kit\menu-navigation\MenuButtonElement\MenuButtonElement.jsx

Добавляется класс с префиксом "filled".
Для него у MUI не заложены стили, поэтому корректная перестилизация

```bash
MuiButton-filled
MuiButton-filledPrimary
MuiButton-filledSizeSmall
MuiButton-filled
MuiButton-filledPrimary
MuiButton-filledSizeSmall

MuiButton-text
MuiButton-textPrimary
MuiButton-textSizeSmall
MuiButton-text
MuiButton-textPrimary
MuiButton-textSizeSmall
```

Исправить в файлах

> ui-kit\menu-navigation\MenuButtonElement\MenuButtonElement.tsx
> ui-kit\basic\ButtonElement\ButtonElement.tsx

## ⭐️ FEATURES

- Storybook
