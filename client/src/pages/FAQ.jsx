import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, useTheme } from "@mui/material"
import { ExpandMoreOutlined } from "@mui/icons-material"

import PageHeading from "../shared/PageHeading"
import { themeTokens } from "../theme/theme"

export default function FAQ() {
  const theme = useTheme()
  const colors = themeTokens(theme.palette.mode)

  return (
    <Box m="20px">
      <PageHeading title="FAQ" subTitle="Frequently Asked Questions"  />

      <Box mt={2}>
        <Accordion defaultExpanded sx={{ backgroundColor: colors.primary[700], boxShadow: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />} >
            <Typography variant="h5">
              An Important Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates quidem, neque exercitationem aut dolore libero, incidunt corporis nulla molestias vitae? Officia temporibus quae voluptatem dicta molestiae fuga eveniet maiores.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion sx={{ backgroundColor: colors.primary[700], boxShadow: 2 }}>
          <AccordionSummary expandIcon={<ExpandMoreOutlined />} >
            <Typography variant="h5">
              Another Question
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non voluptates quidem, neque exercitationem aut dolore libero, incidunt corporis nulla molestias vitae? Officia temporibus quae voluptatem dicta molestiae fuga eveniet maiores.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  )
}
