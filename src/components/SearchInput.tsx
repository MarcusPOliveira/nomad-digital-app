import { useState } from "react"
import { TextInput, TextInputProps } from "react-native"

import { useAppTheme } from "../theme/useAppTheme"

import { Box, BoxProps, IconButton } from "@/src/components"

type SearchInputProps = {} & Pick<TextInputProps, "value" | "onChangeText" | "placeholder">

export function SearchInput({ value, onChangeText, placeholder }: SearchInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  const { colors, textVariants } = useAppTheme()

  return (
    <Box
      {...boxStyle}
      style={{
        borderColor: isFocused ? colors.primary : colors.gray1,
      }}
    >
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.text}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...textVariants.title16,
          color: colors.text,
          height: "100%",
          width: "100%",
          flexShrink: 1,
        }}
      />
      <IconButton iconName="Search-outline" onPress={() => {}} />
    </Box>
  )
}

const boxStyle: BoxProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "s8",
  backgroundColor: "gray1",
  height: 70,
  borderRadius: "rounded",
  borderWidth: 2,
  paddingLeft: "s16",
}
