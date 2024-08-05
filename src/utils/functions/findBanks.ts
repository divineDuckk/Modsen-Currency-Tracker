import { MOCK_BANKS } from '@/constants'
import { Bank } from '@/interfaces'

export const findBanks = (currency: string, banks: Bank[] = MOCK_BANKS) => {
  return banks.filter((bank) => bank.currencies.includes(currency))
}
