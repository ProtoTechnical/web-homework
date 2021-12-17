import { useContext } from 'react'
import { RomanNumeralContext } from '../../routes'

export function Number (num) {
  let romanNums = useContext(RomanNumeralContext).roman

  function convert (number) {
    number = parseInt(number)

    if (isNaN(number) || number <= 0) {
      return 'nulla'
    }

    const romanNumerals = [
      [1000, 'M'],
      [900, 'CM'],
      [500, 'D'],
      [400, 'CD'],
      [100, 'C'],
      [90, 'XC'],
      [50, 'L'],
      [40, 'XL'],
      [10, 'X'],
      [9, 'IX'],
      [5, 'V'],
      [4, 'IV'],
      [1, 'I']
    ]

    let concat = ''
    romanNumerals.forEach(pair => {
      while (number >= pair[0]) {
        number -= pair[0]
        concat += pair[1]
      }
    })

    return concat
  }

  if (romanNums) { return convert(num) }
  return num
}
