import { Box } from "@mui/material"

import PageHeading from '../shared/PageHeading'
import LineChart from "../components/LineChart"
import { mockLineData } from "../data/mockData"

export default function Line() {
  return (
    <Box m="20px">
      <PageHeading title="Line Chart" subTitle="Simple line chart" />
      
      <Box height="75vh" minHeight="250px">
        <LineChart data={mockLineData} />
      </Box>
    </Box>
  )
}
