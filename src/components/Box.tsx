import { createBox } from "@shopify/restyle"
import { Theme } from "../theme/theme"

export type BoxProps = React.ComponentProps<typeof Box>

export const Box = createBox<Theme>()
