'use client'
import BarChart from '@image/icons/barchart.svg'
import { useState } from 'react'
import { ResponsiveBar } from '@nivo/bar'

export default function ScanGraph() {
  const [select, setSelect] = useState('day')

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(event.target.value)
  }

  const data = [
    {
      country: 'AD',
      'hot dog': 41,
      'hot dogColor': 'hsl(124, 70%, 50%)',
      burger: 144,
      burgerColor: 'hsl(321, 70%, 50%)',
      sandwich: 122,
      sandwichColor: 'hsl(220, 70%, 50%)',
      kebab: 134,
      kebabColor: 'hsl(103, 70%, 50%)',
      fries: 134,
      friesColor: 'hsl(31, 70%, 50%)',
      donut: 56,
      donutColor: 'hsl(242, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 126,
      'hot dogColor': 'hsl(26, 70%, 50%)',
      burger: 137,
      burgerColor: 'hsl(234, 70%, 50%)',
      sandwich: 170,
      sandwichColor: 'hsl(225, 70%, 50%)',
      kebab: 176,
      kebabColor: 'hsl(128, 70%, 50%)',
      fries: 60,
      friesColor: 'hsl(36, 70%, 50%)',
      donut: 181,
      donutColor: 'hsl(54, 70%, 50%)',
    },
  ]

  return (
    <div className='h-full w-full rounded-md bg-white p-4 shadow-lg'>
      <div className='flex h-8 w-full justify-between'>
        <div className='flex gap-1'>
          <BarChart className='h-7 w-7' />
          <span className='text-xl'>스캔 그래프</span>
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
        <ResponsiveBar
          data={data}
          keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
          indexBy='country'
          margin={{ top: 50, right: 130, bottom: 80, left: 60 }}
          padding={0.3}
          groupMode='grouped'
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
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
            legend: 'country',
            legendPosition: 'middle',
            legendOffset: 32,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'food',
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
          legends={[
            {
              dataFrom: 'keys',
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: 'left-to-right',
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role='application'
          ariaLabel='Nivo bar chart demo'
          barAriaLabel={(e) => e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue}
        />
      </div>
    </div>
  )
}
