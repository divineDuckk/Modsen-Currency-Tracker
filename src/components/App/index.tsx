import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/components/MainLayout'
import { RoutesArr } from '@/routes'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const App: FC = () => {
  return (
    <MainLayout>
      <Routes>
        {RoutesArr.map(({ path, Page }) => (
          <Route
            key={path}
            path={path}
            element={
              <ErrorBoundary>
                <Page />
              </ErrorBoundary>
            }
          />
        ))}
      </Routes>
    </MainLayout>
  )
}
