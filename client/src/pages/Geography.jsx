import { Box, useTheme } from "@mui/material"

import PageHeading from "../shared/PageHeading"
import GeographyChart from "../components/GeographyChart"
import { geoFeatures } from "../data/mockGeoFeatures"

import { useFetchGeographyQuery } from '../store'

export default function Geography() {
  const theme = useTheme()

  const { data, isLoading } = useFetchGeographyQuery()

  return (
    <Box m="20px">
      <PageHeading title="Geography" subTitle="Where your users are located" />
      
      <Box height="75vh" border={`1px solid grey`} backgroundColor={theme.palette.primary[600]} borderRadius="4px" mt={2}>
        <GeographyChart data={data?.locations || []} geoFeatures={geoFeatures} />
      </Box>
    </Box>
  )
}
