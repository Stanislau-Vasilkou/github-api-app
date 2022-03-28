import { Dispatch, SetStateAction } from 'react'
import { PaginationProps } from 'antd/es'

import { Query } from '../constants/types'

export const usePagination = (
  queries: Query,
  setQueries: Dispatch<SetStateAction<Query>>,
  total: number,
): PaginationProps => {
  const handleChangePage = (page: number, size: number) =>
    setQueries((prev) => ({
      ...prev,
      page,
      per_page: size,
    }))

  const pagination = {
    onChange: handleChangePage,
    pageSize: queries.per_page,
    current: queries.page,
    showQuickJumper: true,
    showSizeChanger: false,
    total,
  }

  return pagination
}
