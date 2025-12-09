import { useRef } from "react"
import { FlatList, ListRenderItemInfo } from "react-native"
import { useScrollToTop } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { cityPreviewList } from "@/src/data/cities"
import { CityPreview } from "@/src/types/types"

import { useAppTheme } from "@/src/theme/useAppTheme"

import { ScreenContainer, CityCard } from "@/src/components"
import { CityFilter } from "@/src/containers/CityFilter"

export default function HomeScreen() {
  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()

  const flatListRef = useRef(null)

  useScrollToTop(flatListRef)

  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <ScreenContainer>
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
        ListHeaderComponent={<CityFilter />}
      />
    </ScreenContainer>
  )
}
