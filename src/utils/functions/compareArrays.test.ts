import { areTimeLineDataEqual } from './compareArrays'

describe('check compareArrays', () => {
  it('should return true when arrays equal', () => {
    const arr1 = [{ open: 1, date: '01.11.2000', close: 2, low: 1.2, high: 4 }]
    const arr2 = [{ open: 1, date: '01.11.2000', close: 2, low: 1.2, high: 4 }]
    expect(areTimeLineDataEqual(arr1, arr2)).toBe(true)
  })
  it('should return false when arrays not equal', () => {
    const arr1 = [{ open: 2, date: '01.11.2000', close: 2, low: 1.2, high: 4 }]
    const arr2 = [{ open: 1, date: '01.11.2000', close: 2, low: 1.2, high: 4 }]
    expect(areTimeLineDataEqual(arr1, arr2)).toBe(false)
  })
  it('should return false when arrays not equal by length', () => {
    const arr1 = [
      { open: 2, date: '01.11.2000', close: 2, low: 1.2, high: 4 },
      { open: 2, date: '01.11.2000', close: 2, low: 1.2, high: 4 },
    ]
    const arr2 = [{ open: 1, date: '01.11.2000', close: 2, low: 1.2, high: 4 }]
    expect(areTimeLineDataEqual(arr1, arr2)).toBe(false)
  })
})
