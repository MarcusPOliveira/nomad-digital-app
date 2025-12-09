import { FlatList, ListRenderItemInfo } from "react-native"

import { cityPreviewList } from "@/src/data/cities"
import { CityPreview } from "@/src/types/types"

import { ScreenContainer } from "@/src/components"
import { CityCard } from "@/src/components/CityCard"
import { useAppTheme } from "@/src/theme/useAppTheme"
import { useScrollToTop } from "@react-navigation/native"
import { useRef } from "react"

export default function HomeScreen() {
  const { spacing } = useAppTheme()

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
        contentContainerStyle={{ gap: spacing.padding }}
        showsVerticalScrollIndicator={false}
      />
    </ScreenContainer>
  )
}
