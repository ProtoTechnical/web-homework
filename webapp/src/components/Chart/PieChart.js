import React from 'react'
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart'
import { css } from '@emotion/core'
import { useQuery } from '@apollo/react-hooks'
import GetTransactions from '../../gql/transactions.gql'
import { Spinner } from 'react-bootstrap'

const labelCSS = css`
  text {
    fill: white;
    font-size: 0.14rem;
  }
`
const pieChartCSS = css`
  width: 700px;
  margin: auto;
  margin-top: -4rem;
`
const titleCSS = css`
  margin-top: 2rem;
`

const listOfColors = [
  '#800000',
  '#ff0000',
  '#ffA500',
  '#ffff00',
  '#808000',
  '#800080',
  '#ff00ff',
  '#ffffff',
  '#00ff00',
  '#008000',
  '#000080',
  '#0000ff',
  '#00ffff',
  '#008080',
  '#000000',
  '#c0c0c0',
  '#808080'
]

export function PieChart () {
  const { loading, data, error } = useQuery(GetTransactions)

  if (loading) {
    return (
      <div className='text-center'>
        <Spinner animation='border' className='m-3' />
      </div>
    )
  }
  if (error) {
    return error.message
  }

  const categoryMap = new Map()
  data.transactions.map(tx => {
    if (categoryMap.has(tx.category)) {
      const currentSum = categoryMap.get(tx.category)
      categoryMap.set(tx.category, currentSum + tx.amount)
    } else {
      categoryMap.set(tx.category, tx.amount)
    }
  })

  let totalSpend = 0
  categoryMap.forEach(amount => { totalSpend += amount })

  let categories = []
  let i = 0
  categoryMap.forEach((amount, categoryName) => {
    const percent = Math.round(amount / totalSpend * 100)
    categoryName = (categoryName === null) ? 'No category' : categoryName
    categoryName += ': ' + percent + '%'
    const colorIndex = i % listOfColors.length

    categories.push({
      title: categoryName,
      color: listOfColors[colorIndex],
      value: percent
    })
    i++
  })

  if (data?.transactions?.length) {
    return (
      <div css={labelCSS}>
        <h2 className='text-center' css={titleCSS}>Spend by category</h2>
        <div css={pieChartCSS}>
          <MinimalPieChart
            animate='true'
            data={categories}
            label={(category) => category.title}
            radius='35'
          />
        </div>
      </div>
    )
  } else {
    return (
      <p>
        Add data in order to view metrics.
      </p>
    )
  }
}
