import { Box } from "@mui/material"

import PageHeading from '../shared/PageHeading'
import PieChart from "../components/PieChart"
import { mockPieData } from "../data/mockData"

export default function Pie() {
  return (
    <Box m="20px">
      <PageHeading title="Pie Chart" subTitle="Simple pie chart" />
      
      <Box height="75vh">
        <PieChart data={mockPieData} />
      </Box>
    </Box>
  )
}
