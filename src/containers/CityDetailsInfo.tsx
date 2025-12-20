import { City } from "../types/types"

import { Box, Text } from "../components"

type CityDetailsInfoProps = Pick<City, "name" | "country" | "description">

export function CityDetailsInfo({ name, country, description }: CityDetailsInfoProps) {
  return (
    <Box padding="padding">
      <Text variant="title28" marginBottom="s2">
        {name}
      </Text>
      <Text variant="text18" marginBottom="s24">
        {country}
      </Text>
      <Text variant="text14">{description}</Text>
    </Box>
  )
}
