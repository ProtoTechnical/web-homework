import React, { useState } from 'react'
import { arrayOf, string, bool, number, shape } from 'prop-types'
import { css } from '@emotion/core'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import * as Icon from 'react-bootstrap-icons'
import { DeleteTxModal } from '../DeleteTxModal'
import { EditTxModal } from '../EditTxModal'
import { Number } from '../Number'
import { StringProc } from '../StringProc'
import { AddTransaction } from '../add-transaction'

const tableCSS = css`
  margin-top: 1rem;
  margin-bottom: -1rem;
`

const editButtonCSS = css`
  color: white;
`

const addButtonCSS = css`
  margin-top: 1rem;
  text-align: right;
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
        <td data-testid={makeDataTestId(id, 'id')}>{StringProc(id)}</td>
        <td data-testid={makeDataTestId(id, 'userId')}>{StringProc(userId)}</td>
        <td data-testid={makeDataTestId(id, 'category')}>{StringProc(category)}</td>
        <td data-testid={makeDataTestId(id, 'description')}>{StringProc(description)}</td>
        <td data-testid={makeDataTestId(id, 'merchant')}>{StringProc(merchantId)}</td>
        <td data-testid={makeDataTestId(id, 'debit')}>{StringProc(Card(debit))}</td>
        <td data-testid={makeDataTestId(id, 'amount')}>${Number(amount.toFixed(2))}</td>
        <td data-testid={makeDataTestId(id, 'edit')}><Button data-testId='editBtn' onClick={onEditClick} variant='info'><Icon.PencilSquare css={editButtonCSS} /></Button></td>
        <td data-testid={makeDataTestId(id, 'delete')}><Button data-testId='deleteBtn' name={id} onClick={onDeleteClick} variant='danger'><Icon.Trash /></Button></td>
      </tr>
    )
  })

  return (
    <>
      <div css={addButtonCSS}>
        <AddTransaction />
      </div>
      <DeleteTxModal onClose={closeDeleteModal} show={deleteModalVisible} transaction={deleteTxData} />
      <EditTxModal onClose={closeEditModal} show={editModalVisible} transaction={editTxData} />
      <Table align='center' bordered css={tableCSS} hover striped>
        <tbody>
          <tr className='header'>
            <td >{StringProc('ID')}</td>
            <td >{StringProc('User ID')}</td>
            <td >{StringProc('Category')}</td>
            <td >{StringProc('Description')}</td>
            <td >{StringProc('Merchant ID')}</td>
            <td >{StringProc('Card Type')}</td>
            <td >{StringProc('Amount')}</td>
            <td >{StringProc('Edit')}</td>
            <td >{StringProc('Delete')}</td>
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
