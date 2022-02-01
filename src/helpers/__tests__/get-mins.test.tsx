import { getMins } from '../get-mins'

const makeSut = getMins

const testCases: any[][] = [
  ['011-016', 1.9],
  ['016-011', 2.9],
  ['018-011', 1.9],
  ['', 0]
]

describe(getMins.name, () => {
  it.each(testCases)('should return the right min', (test, result) => {
    expect(makeSut(test)).toEqual(result)
  })
})
