import React, { useContext } from 'react'
import { Number } from '../Number'
import { css } from '@emotion/core'
import Form from 'react-bootstrap/Form'
import ListGroup from 'react-bootstrap/ListGroup'
import { RomanNumeralContext, i18nContext } from '../../routes'
import { StringProc } from '../StringProc/StringProc'

const indent = css`
  padding-left: 1rem;
`

const padding = css`
  padding-right:75%;
`

const topPadding = css`
    margin-top: 1rem;
`

export function Settings () {
  const { roman, setRoman } = useContext(RomanNumeralContext)
  const toggleRoman = () => setRoman(!roman)

  const { i18n, seti18n } = useContext(i18nContext)
  const togglei18n = () => seti18n(!i18n)

  return (
    <>
      <h2>{StringProc('Settings')}</h2><br />
      {<Form>
        {['checkbox'].map((type) => (
          <div className='mb-3' key={`default-${type}`}>
            <Form.Check
              defaultChecked={roman}
              id='Roman'
              label={StringProc('Roman Numerals')}
              onClick={toggleRoman}
              type={type}
            />
          </div>
        ))}
        <div css={indent}>
          <p>{StringProc('Changes every number to a Roman Numeral!')}</p>
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
        {['checkbox'].map((type) => (
          <div className='mb-3' css={topPadding} key={`default-${type}`}>
            <Form.Check
              defaultChecked={i18n}
              id='i18n'
              label={StringProc('i18n')}
              onClick={togglei18n}
              type={type}
            />
          </div>
        ))}
        <div css={indent}>
          <p>{StringProc('Changes every string to giberish outside of the latin character set!')}</p>
          <div>
            <ListGroup css={padding}>
              <ListGroup.Item>{StringProc('Sonic the Hedgehog')}</ListGroup.Item>
              <ListGroup.Item>{StringProc('Tobey Maguire')}</ListGroup.Item>
              <ListGroup.Item>{StringProc('Samus Aran')}</ListGroup.Item>
              <ListGroup.Item>{StringProc('Kirby')}</ListGroup.Item>
              <ListGroup.Item>{StringProc('Steely Dan')}</ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </Form> }
      <br />
    </>
  )
}
