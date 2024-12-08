import { Box } from "@mui/material"

import PageHeading from '../shared/PageHeading'
import BarChart from "../components/BarChart"
import { mockBarData } from "../data/mockData"

export default function Bar() {
  return (
    <Box m="20px">
      <PageHeading title="Bar Chart" subTitle="Simple bar chart" />
      
      <Box height="75vh">
        <BarChart data={mockBarData} />
      </Box>
    </Box>
  )
}
