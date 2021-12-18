import { render, fireEvent } from '@testing-library/react'

import React from 'react'
import { TxTable } from './TxTable'
import { MockedProvider } from '@apollo/react-testing'

const mockData = [
  {
    'id': '61bae7f1a09ac156d1aad4be',
    'user_id': 'employee4',
    'description': '',
    'merchant_id': 'Olive Garden',
    'debit': false,
    'credit': true,
    'amount': 150,
    'category': 'food',
    '__typename': 'Transaction'
  }
]

const renderTable = () => {
  return render(
    <MockedProvider>
      <TxTable data={mockData} />
    </MockedProvider>
  )
}

describe('Transactions Table', () => {
  it('should show user "employee4" with amount "150"', () => {
    const { queryByText } = renderTable()
    expect(queryByText('employee4')).toBeTruthy()
    expect(queryByText('$150.00')).toBeTruthy()
  })

  it('has an add transaction button', () => {
    const { queryByText } = renderTable()
    expect(queryByText('Add Transaction')).toBeTruthy()
  })

  it('should show the word credit', () => {
    const { queryByText } = renderTable()
    expect(queryByText('Credit')).toBeTruthy()
  })

  it('should display all column names', () => {
    const { queryByText } = renderTable()
    expect(queryByText('ID')).toBeTruthy()
    expect(queryByText('User ID')).toBeTruthy()
    expect(queryByText('Category')).toBeTruthy()
    expect(queryByText('Description')).toBeTruthy()
    expect(queryByText('Merchant ID')).toBeTruthy()
    expect(queryByText('Card Type')).toBeTruthy()
    expect(queryByText('Amount')).toBeTruthy()
    expect(queryByText('Edit')).toBeTruthy()
    expect(queryByText('Delete')).toBeTruthy()
  })

  it('should contain a modal when clicking the add transaction button', () => {
    const { queryByText } = renderTable()
    fireEvent.click(queryByText('Add Transaction'))
    expect(queryByText('Adding a Transaction')).toBeTruthy()
  })

  it('should contain a modal when clicking the edit button', () => {
    const { queryByText, queryByTestId } = renderTable()
    fireEvent.click(queryByTestId('editBtn'))
    expect(queryByText('Editing a Transaction')).toBeTruthy()
  })

  it('should contain a modal when clicking the delete button', () => {
    const { queryByText, queryByTestId } = renderTable()
    fireEvent.click(queryByTestId('deleteBtn'))
    expect(queryByText('Delete Transaction')).toBeTruthy()
  })

  it('should find the category food in the table', () => {
    const { queryByText } = renderTable()
    expect(queryByText('food')).toBeTruthy()
  })
})
