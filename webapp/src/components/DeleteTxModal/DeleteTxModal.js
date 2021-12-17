import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useMutation } from '@apollo/react-hooks'
import DeleteTransactionMutation from '../../gql/delete-transaction.gql'

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
        <Modal.Title>Delete Transaction</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <>Are you sure you would like to delete this transaction?<br />
          <b>Amount:</b> ${transaction?.amount?.toFixed(2)}<br />
          <b>Description:</b> {transaction.description}
        </>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={onClose} variant='secondary'>Cancel</Button>
        <Button onClick={deleteTx} variant='danger'>Delete</Button>
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
