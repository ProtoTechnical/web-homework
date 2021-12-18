import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useMutation } from '@apollo/react-hooks'
import DeleteTransactionMutation from '../../gql/delete-transaction.gql'
import { StringProc } from '../StringProc'
import { Number } from '../Number'

export function DeleteTxModal ({ show, transaction, onClose }) {
  const [deleteTransaction] = useMutation(DeleteTransactionMutation)
  const deleteTx = () => {
    deleteTransaction({
      variables: { id: transaction.id },
      refetchQueries: ['GetTransactions']
    })
    onClose()
  }

  return (
    <Modal onHide={onClose} show={show}>
      <Modal.Header closeButton>
        <Modal.Title>{StringProc('Delete Transaction')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <>{StringProc('Are you sure you would like to delete this transaction?')}<br />
          <b>{StringProc('Amount:')}</b> ${Number(transaction?.amount?.toFixed(2))}<br />
          <b>{StringProc('Description:')}</b> {StringProc(transaction.description)}
        </>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>{StringProc('Cancel')}</Button>
        <Button onClick={deleteTx} variant='danger'>{StringProc('Delete')}</Button>
      </Modal.Footer>

    </Modal>
  )
}

DeleteTxModal.propTypes = {
  show: PropTypes.bool,
  transaction: PropTypes.shape({
    id: PropTypes.string,
    amount: PropTypes.number,
    description: PropTypes.string
  }),
  onClose: PropTypes.func
}
