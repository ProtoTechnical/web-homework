import React, { useState } from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css } from '@emotion/core'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import { DeleteTxModal } from '../DeleteTxModal'
import { EditTxModal } from '../EditTxModal'
import { Number } from '../Number'

const tableCSS = css`
  margin-top: 1rem;
  margin-bottom: -1rem;
`

const editButtonCSS = css`
  color: white;
`

const makeDataTestId = (transactionId, fieldName) => `transaction-${transactionId}-${fieldName}`

function Card (debit) {
  if (debit) { return 'Debit' } else { return 'Credit' }
}

export function TxTable ({ data }) {
  const [deleteModalVisible, setDeleteModalVisible] = useState(false)
  const [deleteTxData, setDeleteTxData] = useState({})
  const [editModalVisible, setEditModalVisible] = useState(false)
  const [editTxData, setEditTxData] = useState({})

  const closeDeleteModal = () => setDeleteModalVisible(false)
  const openDeleteModal = () => setDeleteModalVisible(true)
  const closeEditModal = () => setEditModalVisible(false)
  const openEditModal = () => setEditModalVisible(true)

  const tableRows = data.map(tx => {
    const { id, user_id: userId, description, merchant_id: merchantId, debit, amount, category } = tx
    const onDeleteClick = () => {
      setDeleteTxData(tx)
      openDeleteModal()
    }
    const onEditClick = () => {
      setEditTxData(tx)
      openEditModal()
    }

    return (
      <tr data-testid={`transaction-${id}`} key={`transaction-${id}`}>
        <td data-testid={makeDataTestId(id, 'id')}>{id}</td>
        <td data-testid={makeDataTestId(id, 'userId')}>{userId}</td>
        <td data-testid={makeDataTestId(id, 'category')}>{category}</td>
        <td data-testid={makeDataTestId(id, 'description')}>{description}</td>
        <td data-testid={makeDataTestId(id, 'merchant')}>{merchantId}</td>
        <td data-testid={makeDataTestId(id, 'debit')}>{Card(debit)}</td>
        <td data-testid={makeDataTestId(id, 'amount')}>${Number(amount.toFixed(2))}</td>
        <td data-testid={makeDataTestId(id, 'edit')}><Button onClick={onEditClick} variant='info'><Icon.PencilSquare css={editButtonCSS} /></Button></td>
        <td data-testid={makeDataTestId(id, 'delete')}><Button name={id} onClick={onDeleteClick} variant='danger'><Icon.Trash /></Button></td>
      </tr>
    )
  })

  return (
    <>
      <DeleteTxModal onClose={closeDeleteModal} show={deleteModalVisible} transaction={deleteTxData} />
      <EditTxModal onClose={closeEditModal} show={editModalVisible} transaction={editTxData} />
      <Table align='center' bordered css={tableCSS} hover striped>
        <tbody>
          <tr className='header'>
            <td >ID</td>
            <td >User ID</td>
            <td >Category</td>
            <td >Description</td>
            <td >Merchant ID</td>
            <td >Card Type</td>
            <td >Amount</td>
            <td >Edit</td>
            <td >Delete</td>
          </tr>
          {tableRows}
        </tbody>
      </Table>
    </>
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
