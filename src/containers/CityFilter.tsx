import { ScrollView } from "react-native"

import { Category } from "../types/types"

import { Box, CategoryPill, SearchInput } from "../components"

type CityFilterProps = {
  categories?: Category[]
  cityName: string
  onChangeCityName: (name: string) => void
  selectedCategoryId: string | null
  onChangeSelectedCategoryId: (id: string | null) => void
}

export function CityFilter({
  categories,
  cityName,
  onChangeCityName,
  selectedCategoryId,
  onChangeSelectedCategoryId,
}: CityFilterProps) {
  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={cityName}
          onChangeText={onChangeCityName}
          placeholder="Qual o seu próximo destino?"
        />
      </Box>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Box paddingHorizontal="padding" flexDirection="row" mt="s16" gap="s8">
          {categories?.map((category) => (
            <CategoryPill
              key={category.code}
              category={category}
              active={category.id === selectedCategoryId}
              onPress={() => {
                if (selectedCategoryId) return onChangeSelectedCategoryId(null)
                onChangeSelectedCategoryId(category.id)
              }}
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}
