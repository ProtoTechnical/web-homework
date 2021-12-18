import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { css } from '@emotion/core'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InputGroup from 'react-bootstrap/InputGroup'
import { useMutation } from '@apollo/react-hooks'
import AddTransactionMutation from '../../gql/add-transaction.gql'
import { StringProc } from '../StringProc'

const addButtonCSS = css`
  text-align: right;
`

const formRowsCss = css`
  .add-transaction-form-row {
      margin-bottom: 1rem;
  }
`

export function AddTransaction () {
  const [modalVisible, setModalVisible] = useState(false)
  const [addTransaction] = useMutation(AddTransactionMutation)

  const formRowClassName = 'add-transaction-form-row'

  const closeModal = () => setModalVisible(false)
  const openModal = () => setModalVisible(true)
  const submitForm = (e) => {
    e.preventDefault()
    if (e.currentTarget.checkValidity === false) {
      e.stopPropagation()
    }
    addTransaction({
      variables: {
        user_id: document.getElementById('addUserID').value,
        amount: parseFloat(document.getElementById('addAmount').value),
        category: document.getElementById('addCategory').value,
        credit: document.getElementById('Credit').checked,
        debit: document.getElementById('Debit').checked,
        description: document.getElementById('addDescription').value,
        merchant_id: document.getElementById('addMerchantID').value
      },
      refetchQueries: ['GetTransactions']
    })
    closeModal()
  }

  return (
    <>
      <div css={addButtonCSS}>
        <Button onClick={openModal} variant='success'>
          {StringProc('Add Transaction')}
        </Button></div>

      <Modal onHide={closeModal} show={modalVisible} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>{StringProc('Adding a Transaction')}</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitForm}>
          <Modal.Body>
            <div css={formRowsCss}>
              <Row className={formRowClassName}>
                <Form.Group as={Col} controlId='addUserID'>
                  <Form.Label>{StringProc('User ID')}</Form.Label>
                  <Form.Control placeholder={StringProc('Enter User ID')} required />
                </Form.Group>

                <Form.Group as={Col} controlId='addMerchantID'>
                  <Form.Label>{StringProc('Merchant ID')}</Form.Label>
                  <Form.Control placeholder={StringProc('Enter Merchant ID')} required />
                </Form.Group>
              </Row>

              <Form.Group className={formRowClassName} controlId='addDescription' required>
                <Form.Label>{StringProc('Description')}</Form.Label>
                <Form.Control placeholder={StringProc('Enter Description')} required />
              </Form.Group>
              <Row className={formRowClassName}>
                <div>
                  <Form.Label>{StringProc('Transaction Amount')}</Form.Label>
                  <InputGroup as={Col} className={formRowClassName} required>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control id='addAmount' placeholder='0.00' required step={0.01} type='number' />
                  </InputGroup>
                  <Form.Group as={Col}>
                    <Form.Label>{StringProc('Type of Transaction')}</Form.Label>
                    <Row>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`}>
                          <Form.Check
                            id='Debit'
                            inline
                            label={StringProc('Debit')}
                            name='transactionType'
                            required
                            type={type}
                          />
                          <Form.Check
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
              <Form.Group className={formRowClassName} controlId='addCategory'>
                <Form.Label>{StringProc('Category')}</Form.Label>
                <Form.Control placeholder={StringProc('Enter Category')} required />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} variant='secondary'>
              {StringProc('Close')}
            </Button>
            <Button type='submit' variant='primary'>
              {StringProc('Add')}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
