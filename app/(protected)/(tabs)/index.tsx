import { useRef } from "react"
import { FlatList, ListRenderItemInfo } from "react-native"
import { useScrollToTop } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { cityPreviewList } from "@/src/data/cities"
import { CityPreview } from "@/src/types/types"
import { categories } from "@/src/data/categories"

import { useAppTheme } from "@/src/theme/useAppTheme"

import { ScreenContainer, CityCard, Box } from "@/src/components"
import { CityFilter } from "@/src/containers/CityFilter"

export default function HomeScreen() {
  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()

  const flatListRef = useRef(null)

  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return (
      <Box paddingHorizontal="padding">
        <CityCard cityPreview={item} />
      </Box>
    )
  }

  return (
    <ScreenContainer style={{ paddingHorizontal: 0 }}>
      <FlatList
        ref={flatListRef}
        data={cityPreviewList}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          gap: spacing.padding,
          paddingTop: top,
          paddingBottom: spacing.padding,
        }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<CityFilter categories={categories} />}
      />
    </ScreenContainer>
  )
}
