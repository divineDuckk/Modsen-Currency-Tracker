import { Bank } from '@/interfaces'

export const findBanks = (currency: string, banks: Bank[]) => {
  return banks.filter((bank) => bank.currencies.includes(currency))
}
