import { ImageBackground, TouchableOpacity } from "react-native"

import { CityPreview } from "../types/types"
import { useAppTheme } from "../theme/useAppTheme"

import { Text } from "./Text"
import { Box } from "./Box"
import Icon from "./Icon"

type CityCardProps = {
  cityPreview: CityPreview
}

export function CityCard({ cityPreview }: CityCardProps) {
  const { borderRadii } = useAppTheme()

  return (
    <ImageBackground
      style={{ width: "100%", height: 280 }}
      source={cityPreview.coverImage}
      imageStyle={{ borderRadius: borderRadii.default }}
    >
      <Box
        width="100%"
        height="100%"
        backgroundColor="midnightBlack"
        opacity={0.25}
        position="absolute"
      />
      <Box padding="s24" flex={1} justifyContent="space-between">
        <Box alignSelf="flex-end">
          <TouchableOpacity>
            <Icon name="Favorite-outline" size={24} color="text" />
          </TouchableOpacity>
        </Box>

        <Box>
          <Text variant="title22">{cityPreview.name}</Text>
          <Text variant="text16">{cityPreview.country}</Text>
        </Box>
      </Box>
    </ImageBackground>
  )
}
