import { Box, BoxProps } from "./Box"

export default function ScreenContainer({
  children,
  ...boxProps
}: React.PropsWithChildren & BoxProps) {
  return (
    <Box backgroundColor="background" paddingHorizontal="s16" flex={1} {...boxProps}>
      {children}
    </Box>
  )
}
