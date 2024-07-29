import { BankCard } from '@/pages/bankCard'
import { Contact } from '@/pages/contact'
import { Home } from '@/pages/home'
import { TimeLine } from '@/pages/timeLine'

export const RoutesArr = [
  { path: '/', Page: Home },
  { path: '/timeline', Page: TimeLine },
  { path: '/bank_card', Page: BankCard },
  { path: '/contato', Page: Contact },
]
