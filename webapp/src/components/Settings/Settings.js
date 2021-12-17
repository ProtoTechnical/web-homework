import React, { useContext } from 'react'
import { Number } from '../Number'
import { css } from '@emotion/core'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import { RomanNumeralContext } from '../../routes'

const indent = css`
  padding-left: 1rem;
`

const padding = css`
  padding-right:75%;
`

export function Settings () {
  const { roman, setRoman } = useContext(RomanNumeralContext)
  const toggleRoman = () => setRoman(!roman)

  return (
    <>
      <h2>Settings</h2><br />
      {<Form>
        {['checkbox'].map((type) => (
          <div className='mb-3' key={`default-${type}`}>
            <Form.Check
              defaultChecked={roman}
              id='Roman'
              label='Roman Numerals'
              onClick={toggleRoman}
              type={type}
            />
          </div>
        ))}
        <div css={indent}>
          <p>Changes every number to a Roman Numeral!</p>
          <div>
            <ListGroup css={padding}>
              <ListGroup.Item>{Number(99)}</ListGroup.Item>
              <ListGroup.Item>{Number(4)}</ListGroup.Item>
              <ListGroup.Item>{Number(76)}</ListGroup.Item>
              <ListGroup.Item>{Number(198)}</ListGroup.Item>
              <ListGroup.Item>{Number(1029)}</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Form> }
      <br />
    </>
  )
}
