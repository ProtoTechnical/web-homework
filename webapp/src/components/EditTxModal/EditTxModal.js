import React from 'react'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'
import { css } from '@emotion/core'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { useMutation } from '@apollo/react-hooks'
import EditTransactionMutation from '../../gql/edit-transaction.gql'
import { StringProc } from '../StringProc'

const formRowsCss = css`
  .add-transaction-form-row {
      margin-bottom: 1rem;
  }
`

export function EditTxModal ({ show, transaction, onClose }) {
  const formRowClassName = 'edit-transaction-form-row'
  const [EditTransaction] = useMutation(EditTransactionMutation)
  const editTx = (e) => {
    e.preventDefault()
    if (e.currentTarget.checkValidity === false) {
      e.stopPropagation()
    }
    EditTransaction({
      variables: {
        id: transaction.id,
        user_id: document.getElementById('editUserID').value,
        amount: parseFloat(document.getElementById('editAmount').value),
        category: document.getElementById('editCategory').value,
        credit: document.getElementById('Credit').checked,
        debit: document.getElementById('Debit').checked,
        description: document.getElementById('editDescription').value,
        merchant_id: document.getElementById('editMerchantID').value
      },
      refetchQueries: ['GetTransactions']
    })
    onClose()
  }

  return (
    <Modal onHide={onClose} show={show} size='lg'>
      <Modal.Header closeButton>
        <Modal.Title>{StringProc('Editing a Transaction')}</Modal.Title>
      </Modal.Header>
      <Form onSubmit={editTx}>
        <Modal.Body>
          <div css={formRowsCss}>
            <Row className={formRowClassName}>
              <Form.Group as={Col} controlId='editUserID'>
                <Form.Label>{StringProc('User ID')}</Form.Label>
                <Form.Control defaultValue={transaction.user_id} placeholder={StringProc('Enter User ID')} required />
              </Form.Group>

              <Form.Group as={Col} controlId='editMerchantID'>
                <Form.Label>{StringProc('Merchant ID')}</Form.Label>
                <Form.Control defaultValue={transaction.merchant_id} placeholder={StringProc('Enter Merchant ID')} required />
              </Form.Group>
            </Row>

            <Form.Group className={formRowClassName} controlId='editDescription' required>
              <Form.Label>{StringProc('Description')}</Form.Label>
              <Form.Control defaultValue={transaction.description} placeholder={StringProc('Enter Description')} required />
            </Form.Group>
            <Row className={formRowClassName}>
              <div>
                <Form.Label>{StringProc('Transaction Amount')}</Form.Label>
                <InputGroup as={Col} className={formRowClassName} required>
                  <InputGroup.Text>$</InputGroup.Text>
                  <Form.Control defaultValue={transaction?.amount?.toFixed(2)} id='editAmount' placeholder='0.00' required step={0.01} type='number' />
                </InputGroup>
                <Form.Group as={Col}>
                  <Form.Label>{StringProc('Type of Transaction')}</Form.Label>
                  <Row>
                    {['radio'].map((type) => (
                      <div key={`inline-${type}`}>
                        <Form.Check
                          defaultChecked={transaction.debit}
                          id='Debit'
                          inline
                          label={StringProc('Debit')}
                          name='transactionType'
                          required
                          type={type}
                        />
                        <Form.Check
                          defaultChecked={transaction.credit}
                          id='Credit'
                          inline
                          label={StringProc('Credit')}
                          name='transactionType'
                          required
                          type={type}

                        />
                      </div>
                    ))}
                  </Row>
                </Form.Group>
              </div>
            </Row>
            <Form.Group className={formRowClassName} controlId='editCategory'>
              <Form.Label>{StringProc('Category')}</Form.Label>
              <Form.Control defaultValue={transaction.category} placeholder={StringProc('Enter Category')} required />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose} variant='secondary'>
            {StringProc('Close')}
          </Button>
          <Button type='submit' variant='primary'>
            {StringProc('Edit')}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

EditTxModal.propTypes = {
  show: PropTypes.bool,
  transaction: PropTypes.shape({
    id: PropTypes.string,
    merchant_id: PropTypes.string,
    amount: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string,
    credit: PropTypes.bool,
    debit: PropTypes.bool,
    user_id: PropTypes.string
  }),
  onClose: PropTypes.func
}
