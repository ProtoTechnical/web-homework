import React from 'react'
import { useQuery } from '@apollo/client'
import GetTransactions from '../gql/transactions.gql'
import { TxTable } from '../components/transactions/TxTable'
import { AddTransaction } from '../components/add-transaction'
import Spinner from 'react-bootstrap/Spinner'
import { css } from '@emotion/core'

const spinnerCSS = css`
  text-align: center;
  margin-top: 19rem;
`
const addButtonCSS = css`
  margin-top: 1rem;
  text-align: right;
`

export function Home () {
  const { loading, error, data = {} } = useQuery(GetTransactions)

  if (loading) {
    return (
      <div css={spinnerCSS}>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </div>
    )
  }

  if (error) {
    return (
      <>
        ¯\_(ツ)_/¯
      </>
    )
  }

  return (
    <>
      <div css={addButtonCSS}>
        <AddTransaction />
      </div>
      <TxTable data={data.transactions} />
    </>
  )
}
