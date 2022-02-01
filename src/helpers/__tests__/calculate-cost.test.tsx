import { calculateTotal } from '../calculate-cost'

const makeSut = calculateTotal

const testCases: any[][] = [
  [
    { mins: 200, planMin: 120, cost: 1.9 },
    { withPlan: 167.2, withoutPlan: 380 }
  ],
  [
    { mins: 20, planMin: 30, cost: 1.9 },
    { withPlan: 0, withoutPlan: 38 }
  ],
  [
    { mins: 80, planMin: 60, cost: 1.7 },
    { withPlan: 37.4, withoutPlan: 136 }
  ]
]

describe(calculateTotal.name, () => {
  it.each(testCases)('should return the right min', (test, result) => {
    expect(makeSut(test['mins'], test['planMin'], test['cost'])).toEqual(result)
  })
})
