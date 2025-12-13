import { useRef, useState } from "react"
import { FlatList, ListRenderItemInfo } from "react-native"
import { useScrollToTop } from "@react-navigation/native"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { CityPreview } from "@/src/types/types"
import { categories } from "@/src/data/categories"
import { useCities } from "@/src/data/useCities"
import { useDebounce } from "@/src/hooks/useDebounce"

import { useAppTheme } from "@/src/theme/useAppTheme"

import { ScreenContainer, CityCard, Box } from "@/src/components"
import { CityFilter } from "@/src/containers/CityFilter"

export default function HomeScreen() {
  const [cityName, setCityName] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)

  const debouncedCityName = useDebounce(cityName)

  const { spacing } = useAppTheme()
  const { top } = useSafeAreaInsets()

  const { cityPreviewList } = useCities(debouncedCityName, "33")

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
        ListHeaderComponent={
          <CityFilter
            categories={categories}
            cityName={cityName}
            onChangeCityName={setCityName}
            selectedCategoryId={selectedCategoryId}
            onChangeSelectedCategoryId={setSelectedCategoryId}
          />
        }
      />
    </ScreenContainer>
  )
}
