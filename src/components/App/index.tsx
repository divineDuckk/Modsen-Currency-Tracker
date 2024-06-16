import { FC } from 'react'

import { MainLayout } from '@/components/MainLayout'
import { Home } from '@/pages/home'

export const App: FC = () => {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  )
}
