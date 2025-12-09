import { useState } from "react"

import { Box, SearchInput } from "../components"

export function CityFilter() {
  const [name, setName] = useState("")

  return (
    <Box>
      <SearchInput value={name} onChangeText={setName} placeholder="Qual o seu próximo destino?" />
    </Box>
  )
}
