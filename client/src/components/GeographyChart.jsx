import { ResponsiveChoropleth } from '@nivo/geo'
import { useTheme } from "@mui/material"

export default function GeographyChart({ data, geoFeatures, isDashboard = false }) {
    const theme = useTheme()

    return (
        <ResponsiveChoropleth
            data={data}
            features={geoFeatures.features}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="blues"
            domain={[ 0, 60 ]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[ 0.4, 0.5 ]}
            projectionRotation={[ 0, 0, 0 ]}
            enableGraticule={false}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            projectionType="mercator"
            projectionScale={100}
            fillColor="#ffffff"
            graticuleLineWidth={0.5}
            isInteractive={true}
            onMouseEnter={() => {}}
            onMouseMove={() => {}}
            onMouseLeave={() => {}}
            onClick={() => {}}
            // layers={['graticule', 'features']}
            // role="user"
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: theme.palette.secondary[200]
                        }
                    },
                    legend: {
                        text: {
                            fill: theme.palette.grey[200]
                        }
                    },
                    ticks: {
                        line: {
                            stroke: theme.palette.secondary[200],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: theme.palette.secondary[200]
                        }
                    }
                },
                tooltip: {
                    container: {
                        color: '#000'
                    }
                }
            }}
            legends={!isDashboard ? [
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: true,
                    translateX: -20,
                    translateY: -50,
                    itemsSpacing: 0,
                    itemWidth: 100,
                    itemHeight: 30,
                    itemDirection: 'left-to-right',
                    itemTextColor: theme.palette.grey[200],
                    itemOpacity: 1,
                    symbolSize: 30
                }
            ]:[]}
        />
    )
}
