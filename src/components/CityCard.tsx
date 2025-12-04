import { ImageBackground } from "react-native"
import { CityPreview } from "../types/types"
import { Text } from "./Text"

type CityCardProps = {
  cityPreview: CityPreview
}

export function CityCard({ cityPreview }: CityCardProps) {
  return (
    <ImageBackground
      style={{ width: 200, height: 300, margin: 10 }}
      source={cityPreview.coverImage}
    >
      <Text>{cityPreview.name}</Text>
      <Text>{cityPreview.country}</Text>
    </ImageBackground>
  )
}
