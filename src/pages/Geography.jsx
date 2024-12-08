import { Box } from "@mui/material"

import PageHeading from "../shared/PageHeading"
import GeographyChart from "../components/GeographyChart"
import { mockGeographyData } from "../data/mockData"
import { geoFeatures } from "../data/mockGeoFeatures"

export default function Geography() {

  return (
    <Box m="20px">
      <PageHeading title="Geography Chart" subTitle="Simple geography chart" />
      
      <Box height="75vh" border={`1px solid grey`} borderRadius="4px" mt={2}>
        <GeographyChart data={mockGeographyData} geoFeatures={geoFeatures} />
      </Box>
    </Box>
  )
}
