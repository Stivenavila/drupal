import React from 'react'
import { Text } from '../Text/Text'
import { Colors } from '../Colors/Colors.stories'
import { IColor } from 'common/interfaces'
interface TableProps {
  rows: { [index: string]: string | number }[]
  color: IColor['color']
}

export const Table = ({ rows, color = 'primary' }: TableProps) => {
  return (
    <table className='table-auto'>
      <thead>
        <tr className='w-full border-b border-b-primary'>
          {Object.keys(rows[0]).map((header, index) => (
            <th
              className={`${index !== 0 ? 'px-8' : ''} py-3 font-semibold text-left`}
              key={index}
            >
              <Text color={color} component='span'>
                {header}
              </Text>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={`border-b border-b-primary w-full ${
              rowIndex === rows.length - 1 ? 'border-b-0 border-b-transparent' : ''
            }`}
          >
            {Object.values(row).map((cell, cellIndex) => (
              <td className={`${cellIndex !== 0 ? 'px-8' : ''} py-3`} key={cellIndex}>
                <Text color={color} component='span'>
                  {cell}
                </Text>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
