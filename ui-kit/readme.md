
# Usage12
```jsx
import { Button } from "@/sawyer-react-lib/ui-kit"
import { Chip } from "@/sawyer-react-lib/ui-kit"
import { ChipsList } from "@/sawyer-react-lib/ui-kit"
import { Modal } from "@/sawyer-react-lib/ui-kit"
import { TypographyH2 } from "@/sawyer-react-lib/ui-kit"

const App = () => {
    return (
        <div style={{ background: "#fff" }}>
            <Button>Button</Button>

            <Chip className={styles.chip}>
                Chip
            </Chip>

            <ChipsList
              theme="default-light"
              items={['Item-1', 'Item-2']}
              className={styles.chip}
            />

            <TypographyH2>TypographyH2</TypographyH2>
        </div>
    )
}
```
