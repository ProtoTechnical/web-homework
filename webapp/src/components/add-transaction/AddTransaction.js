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

const addButtonCSS = css`
  margin-top: 1rem;
  margin-right: 7.75%;
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
        user_id: this.addUserID.value,
        amount: parseFloat(this.addAmount.value),
        category: this.addCategory.value,
        credit: this.Credit.checked,
        debit: this.Debit.checked,
        description: this.addDescription.value,
        merchant_id: this.addMerchantID.value
      },
      refetchQueries: ['GetTransactions']
    })
    closeModal()
    // console.log('data = ', addMerchantID.value)
    // addTransaction()
  }

  return (
    <>
      <div css={addButtonCSS}>
        <Button onClick={openModal} variant='success'>
          Add Transaction
        </Button></div>

      <Modal onHide={closeModal} show={modalVisible} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Adding a Transaction</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitForm}>
          <Modal.Body>
            <div css={formRowsCss}>
              <Row className={formRowClassName}>
                <Form.Group as={Col} controlId='addUserID'>
                  <Form.Label>User ID</Form.Label>
                  <Form.Control placeholder='Enter User ID' required />
                </Form.Group>

                <Form.Group as={Col} controlId='addMerchantID'>
                  <Form.Label>Merchant ID</Form.Label>
                  <Form.Control placeholder='Enter Merchant ID' required />
                </Form.Group>
              </Row>

              <Form.Group className={formRowClassName} controlId='addDescription' required>
                <Form.Label>Description</Form.Label>
                <Form.Control placeholder='Enter Description' required />
              </Form.Group>
              <Row className={formRowClassName}>
                <div>
                  <Form.Label>Transaction Amount</Form.Label>
                  <InputGroup as={Col} className={formRowClassName} required>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control id='addAmount' placeholder='0.00' required step={0.01} type='number' />
                  </InputGroup>
                  <Form.Group as={Col}>
                    <Form.Label>Type of Transaction</Form.Label>
                    <Row>
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`}>
                          <Form.Check
                            id='Debit'
                            inline
                            // defaultValue={'off'}
                            label='Debit'
                            name='transactionType'
                            required
                            type={type}
                          />
                          <Form.Check
                            id='Credit'
                            // defaultValue={'off'}
                            inline
                            label='Credit'
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
                <Form.Label>Category</Form.Label>
                <Form.Control placeholder='Enter Category' required />
              </Form.Group>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={closeModal} variant='secondary'>
                    Close
            </Button>
            <Button type='submit' variant='primary'>
                    Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}
