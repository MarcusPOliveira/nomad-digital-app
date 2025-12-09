import { Box, BoxProps } from "./Box"

export function ScreenContainer({ children, ...boxProps }: React.PropsWithChildren & BoxProps) {
  return (
    <Box backgroundColor="background" paddingHorizontal="padding" flex={1} {...boxProps}>
      {children}
    </Box>
  )
}
