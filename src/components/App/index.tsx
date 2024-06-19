import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/components/MainLayout'
import { Home } from '@/pages/home'
import { RoutesArr } from '@/constants'

export const App: FC = () => {
  return (
    <MainLayout>
      <Home />
      <Routes>
        {RoutesArr.map((el) => (
          <Route key={el.path} path={el.path} element={<el.page />} />
        ))}
      </Routes>
    </MainLayout>
  )
}
