import React from 'react'

interface ItemListProps {
  items: string[]
}

export default function ScanList({ items }: ItemListProps) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
