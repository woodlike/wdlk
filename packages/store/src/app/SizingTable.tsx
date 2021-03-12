import { Box, Column, Columns, Table } from "@wdlk/components"
import { Image, useProductData } from ".."

import React from "react"
import sizingImgSrc from "../assets/size-chart-silhouette-mobile.png"

export const SizingTable: React.FC = () => {
  const {
    sizingLayer: { sizeChart, bodyMeasurement },
  } = useProductData()

  const [sizingHeadline] = sizeChart
  const sizingBody = sizeChart.slice(1, sizeChart.length)
  const [measurementHeadline] = bodyMeasurement
  const measurementBody = bodyMeasurement.slice(1, sizeChart.length)
  return (
    <Columns collapseBelow={2}>
      <Column basis="1/2" padding={[0, 0, 5, 0]}>
        <Image
          alt={
            "Silhouette graphic describing sizing for bust, underbust, waist, and hips."
          }
          fit="contain"
          src={sizingImgSrc}
        />
      </Column>
      <Column basis="1/2">
        <Box padding={[0, 0, 8, 0]}>
          <Table.Frame>
            <thead>
              <tr>
                <Table.Cell as="th"> {sizingHeadline.title}</Table.Cell>
                {sizingHeadline.values.map(val => (
                  <Table.Cell key={`${sizingHeadline.id}-${val}`} as="th">
                    {val}
                  </Table.Cell>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizingBody.map(chart => (
                <tr key={chart.id}>
                  <Table.Cell>{chart.title}</Table.Cell>
                  <>
                    {chart.values.map(val => (
                      <Table.Cell key={`${chart.id}-${val}`}>{val}</Table.Cell>
                    ))}
                  </>
                </tr>
              ))}
            </tbody>
          </Table.Frame>
        </Box>
        <Table.Frame>
          <thead>
            <tr>
              <Table.Cell as="th"> {measurementHeadline.title}</Table.Cell>
              {measurementHeadline.values.map(val => (
                <Table.Cell key={`${measurementHeadline.id}-${val}`} as="th">
                  {val}
                </Table.Cell>
              ))}
            </tr>
          </thead>
          <tbody>
            {measurementBody.map(chart => (
              <tr key={chart.id}>
                <Table.Cell>{chart.title}</Table.Cell>
                <>
                  {chart.values.map(val => (
                    <Table.Cell key={`${chart.id}-${val}`}>{val}</Table.Cell>
                  ))}
                </>
              </tr>
            ))}
          </tbody>
        </Table.Frame>
      </Column>
    </Columns>
  )
}
