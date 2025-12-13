import { cityPreviewList } from "./cities"

export function useCities(cityName: string, categoryId: string) {
  console.log("Filtering cities with:", { cityName, categoryId })
  return { cityPreviewList }
}
