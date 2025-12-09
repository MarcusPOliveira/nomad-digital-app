import { useState } from "react"

import { Category } from "../types/types"

import { Box, CategoryPill, SearchInput } from "../components"
import { ScrollView } from "react-native"

type CityFilterProps = {
  categories?: Category[]
}

export function CityFilter({ categories }: CityFilterProps) {
  const [name, setName] = useState("")
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null)

  return (
    <Box>
      <Box paddingHorizontal="padding">
        <SearchInput
          value={name}
          onChangeText={setName}
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
            />
          ))}
        </Box>
      </ScrollView>
    </Box>
  )
}
