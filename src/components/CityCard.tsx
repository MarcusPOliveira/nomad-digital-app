import { ImageBackground, Pressable, TouchableOpacity } from "react-native"

import { CityPreview } from "../types/types"
import { useAppTheme } from "../theme/useAppTheme"

import { Text } from "./Text"
import { Box } from "./Box"
import { BlackOpacity } from "./BlackOpacity"
import Icon from "./Icon"
import { Link } from "expo-router"

type CityCardProps = {
  cityPreview: CityPreview
}

export function CityCard({ cityPreview }: CityCardProps) {
  const { borderRadii } = useAppTheme()

  return (
    <Link href={`/city-details/${cityPreview.id}`} asChild>
      <Pressable>
        <ImageBackground
          style={{ width: "100%", height: 280 }}
          source={cityPreview.coverImage}
          imageStyle={{ borderRadius: borderRadii.default }}
        >
          <BlackOpacity />
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
      </Pressable>
    </Link>
  )
}
