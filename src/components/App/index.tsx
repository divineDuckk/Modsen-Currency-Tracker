import { FC, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '@/components/MainLayout'
import { RoutesArr } from '@/routes'
import { ErrorBoundary } from '@/components/ErrorBoundary'

import { Loader } from '../Loader/styled'

export const App: FC = () => {
  return (
    <MainLayout>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </MainLayout>
  )
}
