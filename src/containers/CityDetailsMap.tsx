import MapView from "react-native-maps"

import { useAppTheme } from "../theme/useAppTheme"
import { City } from "../types/types"

import { Box, Text } from "../components"

type CityDetailsMapProps = Pick<City, "location">

export function CityDetailsMap({ location }: CityDetailsMapProps) {
  const { borderRadii } = useAppTheme()

  return (
    <Box padding="padding">
      <Text variant="title22" mb="s16">
        Mapa
      </Text>
      <Box
        width="100%"
        height={200}
        style={{
          borderRadius: borderRadii.default,
          overflow: "hidden",
        }}
      >
        <MapView
          style={{
            width: "100%",
            height: "100%",
          }}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </Box>
    </Box>
  )
}
