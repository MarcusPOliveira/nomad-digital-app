import { Pressable, PressableProps } from "react-native"

import { Box, BoxProps, Icon, IconName, Text } from "@/src/components"

export type PillProps = {
  label: string
  iconName: IconName
  active: boolean
  onPress?: PressableProps["onPress"]
}

/**
 * Height of the Pill component including vertical paddings and border
 * 16 (paddingVertical) + 16 (paddingVertical) + 4 (borderWidth * 2) = 36
 * This is used to offset other components when needed, like in CityDetailsHeader
 */

export const PILL_HEIGHT = 16 + 16 + 4

export function Pill({ label, iconName, active, onPress }: PillProps) {
  return (
    <Pressable onPress={onPress}>
      <Box {...boxStyle} backgroundColor={active ? "gray1" : "transparent"}>
        <Icon name={iconName} size={16} color={active ? "primary" : "gray2"} />
        <Text ml="s4" variant="text12">
          {label}
        </Text>
      </Box>
    </Pressable>
  )
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  alignItems: "center",
  borderWidth: 2,
  borderRadius: "rounded",
  paddingVertical: "s8",
  paddingHorizontal: "s12",
  borderColor: "gray1",
}
