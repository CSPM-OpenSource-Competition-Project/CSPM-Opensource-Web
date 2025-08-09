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
      id: 'VPC',
      color: 'hsl(124, 70%, 50%)',
      data: [
        { x: 'vpc', y: 277 },
        { x: '서브넷', y: 123 },
        { x: '보안그룹', y: 212 },
        { x: '라우팅', y: 164 },
        { x: '인터넷 게이트웨이', y: 72 },
        { x: 'S3', y: 161 },
        { x: 'RDS', y: 240 },
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
      <div className='h-[85%] w-full'>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 20, left: 60 }}
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
