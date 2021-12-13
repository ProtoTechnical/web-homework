import React from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
// import { css } from '@emotion/core'
import Table from 'react-bootstrap/Table'

/* const styles = css`
 .header {
   font-weight: bold;
 }
` */

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

export function TxTable ({ data }) {
  return (
    <Table striped bordered hover>
      <tbody>
        <tr className='header'>
          <td >ID</td>
          <td >User ID</td>
          <td >Description</td>
          <td >Merchant ID</td>
          <td >Debit</td>
          <td >Credit</td>
          <td >Amount</td>
          <td >Delete</td>
        </tr>
        {
          data.map(tx => {
            const { id, user_id: userId, description, merchant_id: merchantId, debit, credit, amount } = tx
            return (
              <tr data-testid={`transaction-${id}`} key={`transaction-${id}`}>
                <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
                <td data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
                <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
                <td data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
                <td data-testid={makeDataTestId(id, 'debit')}>{debit}</td>
                <td data-testid={makeDataTestId(id, 'credit')}>{credit}</td>
                <td data-testid={makeDataTestId(id, 'amount')}>{amount}</td>
                <td data-testid={makeDataTestId(id, 'delete')}><Button variant='danger'>X</Button></td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>

  )
}

TxTable.propTypes = {
  data: arrayOf(shape({
    id: string,
    user_id: string,
    description: string,
    merchant_id: string,
    debit: bool,
    credit: bool,
    amount: number
  }))
}
