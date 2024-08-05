import { convertDate } from './convertDate'

describe('check convertDate', () => {
  it('should return right date if date in right form', () => {
    const date = '01.11.2002T11:22Z'
    const result = '01.11.2002 at 11:22'
    expect(convertDate(date)).toBe(result)
  })
  it('should return same date if date in bad form', () => {
    const date = '01.11.2002'
    const result = '01.11.2002'
    expect(convertDate(date)).toBe(result)
  })
})
