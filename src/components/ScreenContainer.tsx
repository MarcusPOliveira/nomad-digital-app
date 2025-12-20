import { ScrollView, View } from "react-native"
import { Box, BoxProps } from "./Box"

export function ScreenContainer({
  children,
  scrollable = false,
  ...boxProps
}: React.PropsWithChildren & BoxProps & { scrollable?: boolean }) {
  const Container = scrollable ? ScrollView : View
  return (
    <Box backgroundColor="background" paddingHorizontal="padding" flex={1} {...boxProps}>
      <Container>{children}</Container>
    </Box>
  )
}
