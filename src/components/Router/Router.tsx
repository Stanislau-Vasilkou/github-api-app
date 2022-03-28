import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { ReposPage } from '../../pages/ReposPage'
import { NotFound } from '../NotFound'
import { routes } from '../../constants/routes'

export const Router: FC = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<ReposPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
