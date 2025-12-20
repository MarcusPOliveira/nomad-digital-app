import { CityPreview } from "../types/types"
import { cities } from "./cities"

type CityFilter = {
  cityName?: string
  categoryId?: string | null
}

export function useCities({ cityName, categoryId }: CityFilter): {
  cityPreviewList: CityPreview[]
} {
  let cityPreviewList = [...cities]

  if (cityName) {
    cityPreviewList = cityPreviewList.filter((city) => {
      return city.name.toLowerCase().includes(cityName.toLowerCase())
    })
  }

  if (categoryId) {
    cityPreviewList = cityPreviewList.filter((city) => {
      return city.categories.some((category) => category.id === categoryId)
    })
  }

  return { cityPreviewList }
}
