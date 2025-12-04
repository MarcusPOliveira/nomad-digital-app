import { FlatList, ListRenderItemInfo } from "react-native"

import { cityPreviewList } from "@/src/data/cities"
import { CityPreview } from "@/src/types/types"

import { CityCard } from "@/src/components/CityCard"
import ScreenContainer from "@/src/components/ScreenContainer"

export default function HomeScreen() {
  function renderItem({ item }: ListRenderItemInfo<CityPreview>) {
    return <CityCard cityPreview={item} />
  }

  return (
    <ScreenContainer
      style={{ alignItems: "center", justifyContent: "center", paddingVertical: 20 }}
    >
      <FlatList data={cityPreviewList} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </ScreenContainer>
  )
}
