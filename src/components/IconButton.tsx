import { Pressable, PressableProps } from "react-native"

import Icon, { IconName } from "./Icon"
import { Box } from "./Box"
import { useAppTheme } from "../theme/useAppTheme"

type IconButtonProps = {
  iconName: IconName
  onPress: PressableProps["onPress"]
}

export function IconButton({ iconName, onPress }: IconButtonProps) {
  const { boxShadow } = useAppTheme()

  return (
    <Pressable onPress={onPress}>
      <Box
        backgroundColor="primary"
        width={50}
        height={50}
        justifyContent="center"
        alignItems="center"
        borderRadius="rounded"
        style={{
          boxShadow: boxShadow.primary,
        }}
      >
        <Icon name={iconName} color="pureWhite" />
      </Box>
    </Pressable>
  )
}
