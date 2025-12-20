import { ImageBackground, ScrollView } from "react-native"
import { BlackOpacity, Box, CategoryPill, Icon, IconButton, PILL_HEIGHT, Text } from "../components"
import { City } from "../types/types"
import { router } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"

type CityDetailsHeaderProps = Pick<City, "id" | "coverImage" | "categories">

export function CityDetailsHeader({ id, coverImage, categories }: CityDetailsHeaderProps) {
  const { top } = useSafeAreaInsets()

  return (
    <Box>
      <ImageBackground
        source={coverImage}
        style={{ width: "100%", height: 250 }}
        imageStyle={{ borderBottomRightRadius: 20 }}
      >
        <BlackOpacity />
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          padding="padding"
          style={{ paddingTop: top }}
        >
          <IconButton iconName="Chevron-left" onPress={router.back} />
          <Icon name="Favorite-outline" size={30} color="pureWhite" />
        </Box>
      </ImageBackground>

      <ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: -PILL_HEIGHT / 2 }}
      >
        <Box flexDirection="row" paddingHorizontal="padding" gap="s8">
          {categories.map((category) => (
            <CategoryPill active key={category.id} category={category} />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}
