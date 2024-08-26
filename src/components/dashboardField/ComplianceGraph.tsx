'use client'
import { ResponsiveLine } from '@nivo/line'
import BarChart from '@image/icons/barchart.svg'
import { useState } from 'react'

export default function ComplianceGraph() {
  const [select, setSelect] = useState('day')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value)
  }
  const data = [
    {
      id: 'japan',
      color: 'hsl(124, 70%, 50%)',
      data: [
        { x: 'plane', y: 277 },
        { x: 'helicopter', y: 123 },
        { x: 'boat', y: 212 },
        { x: 'train', y: 164 },
        { x: 'subway', y: 72 },
        { x: 'bus', y: 161 },
        { x: 'car', y: 240 },
        { x: 'moto', y: 229 },
        { x: 'bicycle', y: 91 },
        { x: 'horse', y: 186 },
        { x: 'skateboard', y: 220 },
        { x: 'others', y: 263 },
      ],
    },
    {
      id: 'france',
      color: 'hsl(74, 70%, 50%)',
      data: [
        { x: 'plane', y: 288 },
        { x: 'helicopter', y: 29 },
        { x: 'boat', y: 234 },
        { x: 'train', y: 215 },
        { x: 'subway', y: 26 },
        { x: 'bus', y: 86 },
        { x: 'car', y: 99 },
        { x: 'moto', y: 42 },
        { x: 'bicycle', y: 68 },
        { x: 'horse', y: 211 },
        { x: 'skateboard', y: 267 },
        { x: 'others', y: 239 },
      ],
    },
    {
      id: 'us',
      color: 'hsl(168, 70%, 50%)',
      data: [
        { x: 'plane', y: 200 },
        { x: 'helicopter', y: 157 },
        { x: 'boat', y: 15 },
        { x: 'train', y: 20 },
        { x: 'subway', y: 162 },
        { x: 'bus', y: 85 },
        { x: 'car', y: 140 },
        { x: 'moto', y: 5 },
        { x: 'bicycle', y: 4 },
        { x: 'horse', y: 220 },
        { x: 'skateboard', y: 173 },
        { x: 'others', y: 11 },
      ],
    },
    {
      id: 'germany',
      color: 'hsl(110, 70%, 50%)',
      data: [
        { x: 'plane', y: 101 },
        { x: 'helicopter', y: 138 },
        { x: 'boat', y: 145 },
        { x: 'train', y: 55 },
        { x: 'subway', y: 47 },
        { x: 'bus', y: 58 },
        { x: 'car', y: 60 },
        { x: 'moto', y: 253 },
        { x: 'bicycle', y: 268 },
        { x: 'horse', y: 110 },
        { x: 'skateboard', y: 116 },
        { x: 'others', y: 116 },
      ],
    },
    {
      id: 'norway',
      color: 'hsl(199, 70%, 50%)',
      data: [
        { x: 'plane', y: 219 },
        { x: 'helicopter', y: 90 },
        { x: 'boat', y: 283 },
        { x: 'train', y: 34 },
        { x: 'subway', y: 255 },
        { x: 'bus', y: 189 },
        { x: 'car', y: 18 },
        { x: 'moto', y: 99 },
        { x: 'bicycle', y: 300 },
        { x: 'horse', y: 237 },
        { x: 'skateboard', y: 279 },
        { x: 'others', y: 42 },
      ],
    },
  ]

  return (
    <div className='h-full w-full rounded-md bg-white p-4 shadow-lg'>
      <div className='flex h-8 w-full justify-between'>
        <div className='flex gap-1'>
          <BarChart className='h-7 w-7' />
          <span className='text-xl'>취약점 그래프</span>
        </div>
        <div>
          <select
            className='h-8 w-20 rounded-md border border-gray-400 px-1'
            value={select}
            onChange={handleSelect}
          >
            <option value='day'>day</option>
            <option value='weak'>weak</option>
            <option value='month'>month</option>
          </select>
        </div>
      </div>
      <div className='h-full w-full'>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 70, left: 60 }}
          xScale={{ type: 'point' }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false,
          }}
          yFormat=' >-.2f'
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '취약점',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
          }}
          colors={{ scheme: 'category10' }}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          pointLabel='data.yFormatted'
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          isInteractive={false}
          useMesh={true}
          animate={false}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: 'circle',
              symbolBorderColor: 'rgba(0, 0, 0, .5)',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemBackground: 'rgba(0, 0, 0, .03)',
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  )
}
