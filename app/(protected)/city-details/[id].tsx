import { useLocalSearchParams, useRouter } from "expo-router"

import { useCityDetails } from "@/src/data/useCityDetails"

import { ScreenContainer, Text, Divider } from "@/src/components"
import {
  CityDetailsHeader,
  CityDetailsInfo,
  CityDetailsMap,
  CityDetailsRelatedCities,
  CityDetailsTouristAttractions,
} from "@/src/containers"

export default function CityDetails() {
  const router = useRouter()
  const { id } = useLocalSearchParams<{ id: string }>()

  const city = useCityDetails(id)

  if (!city) {
    return (
      <ScreenContainer flex={1} justifyContent="center" alignItems="center">
        <Text>City not found</Text>
      </ScreenContainer>
    )
  }
  return (
    <ScreenContainer scrollable style={{ paddingHorizontal: 0 }}>
      <CityDetailsHeader id={city.id} coverImage={city.coverImage} categories={city.categories} />
      <CityDetailsInfo name={city.name} country={city.country} description={city.description} />
      <Divider paddingHorizontal="padding" />

      <CityDetailsTouristAttractions touristAttractions={city.touristAttractions} />
      <Divider paddingHorizontal="padding" />

      <CityDetailsMap />
      <Divider paddingHorizontal="padding" />

      <CityDetailsRelatedCities />
    </ScreenContainer>
  )
}
