'use client'
import { useGroupFeild } from '@/stores/groupStore'
import apiFetch from '@/utils/fetchWrapper'
import BarChart from '@image/icons/barchart.svg'
import { ResponsiveBar } from '@nivo/bar'
import { useEffect, useState } from 'react'

interface BarDatum {
  category: string
  count: number
  countColor: string
  [key: string]: any
}

export default function ScanGraph() {
  const { groupName } = useGroupFeild()
  const [graphData, setGraphData] = useState<BarDatum[]>([])
  const dataFetch = async () => {
    const [statusCode, data] = await apiFetch(`/api/dashboard/graph/${groupName}`, {
      method: 'GET',
      headers: {},
    })
    console.log(statusCode)

    if (statusCode === 200) {
      setGraphData(data)
      const formattedData = data.map((index: BarDatum) => ({
        category: index.category,
        count: index.count,
        countColor: index.countColor,
      }))
      setGraphData(formattedData)
    }
    if (statusCode === 201) {
      setGraphData([])
    }
  }

  useEffect(() => {
    dataFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dataFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupName])

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
          data={graphData}
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
