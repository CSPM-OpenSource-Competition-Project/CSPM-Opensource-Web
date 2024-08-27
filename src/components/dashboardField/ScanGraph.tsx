'use client'
import { useGroupFeild } from '@/stores/groupStore'
import apiFetch from '@/utils/fetchWrapper'
import BarChart from '@image/icons/barchart.svg'
import { ResponsiveBar } from '@nivo/bar'
import { useState } from 'react'

interface groupData {
  category: string
  count: number
  countColor: string
}

export default function ScanGraph() {
  const { groupName } = useGroupFeild()
  const [graphData, setGraphData] = useState<groupData[]>([])
  const dataFetch = async () => {
    const [statusCode, data] = await apiFetch('', {
      method: 'GET',
      headers: {},
    })

    if (statusCode === 200) {
      setGraphData(data)
    }
  }
  const data = [
    {
      category: '전체',
      count: 41,
      countColor: 'hsl(124, 70%, 50%)',
    },
    {
      category: 'VPC 그룹',
      count: 31,
      countColor: 'hsl(321, 70%, 50%)',
    },
    {
      category: '인스턴스 그룹',
      count: 26,
      countColor: 'hsl(220, 70%, 50%)',
    },
  ]

  return (
    <div className='h-full w-full rounded-md bg-white p-4 shadow-lg'>
      <div className='flex h-8 w-full'>
        <div className='flex gap-1'>
          <BarChart className='h-7 w-7' />
          <span className='text-xl'>스캔 그래프</span>
        </div>
      </div>
      <div className='h-full w-full'>
        <ResponsiveBar
          data={data}
          keys={['count']}
          indexBy='category'
          margin={{ top: 50, right: 60, bottom: 80, left: 60 }}
          padding={0.3}
          groupMode='grouped'
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={(bar) => bar.data.countColor}
          defs={[
            {
              id: 'dots',
              type: 'patternDots',
              background: 'inherit',
              color: '#38bcb2',
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: 'lines',
              type: 'patternLines',
              background: 'inherit',
              color: '#eed312',
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: 'fries',
              },
              id: 'dots',
            },
            {
              match: {
                id: 'sandwich',
              },
              id: 'lines',
            },
          ]}
          borderColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: '스캔',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendPosition: 'middle',
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{
            from: 'color',
            modifiers: [['darker', 1.6]],
          }}
          animate={false}
          role='application'
          ariaLabel='Nivo bar chart demo'
          barAriaLabel={(e) => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
        />
      </div>
    </div>
  )
}
