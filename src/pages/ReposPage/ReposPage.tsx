import React, { FC, useState } from 'react'
import { Input, Spin } from 'antd'

import { usePagination, useSearchApi } from '../../hooks'
import {
  PaginatedState,
  Query,
  Repo,
  RepoSortItems,
  SearchInstances,
} from '../../constants/types'

import { ReposList } from './ReposList'

const { Search } = Input

interface RepoQuery extends Query {
  sort?: RepoSortItems
}

type RepoState = PaginatedState<Repo>

const initialRepoState: RepoState = {
  list: [],
  totalCount: 0,
}

const initialQueriesState: RepoQuery = {
  q: '',
  sort: undefined,
  order: undefined,
  per_page: 10,
  page: 1,
}

export const ReposPage: FC = () => {
  const [repoInfo, setRepoInfo] = useState<RepoState>(initialRepoState)
  const [queries, setQueries] = useState<RepoQuery>(initialQueriesState)

  const onSearch = async (value: string) => {
    setQueries((prev) => ({
      ...prev,
      q: value,
    }))
  }

  const loading = useSearchApi<RepoState>(
    queries,
    SearchInstances.repos,
    setRepoInfo,
  )

  const pagination = usePagination(queries, setQueries, repoInfo.totalCount)

  const showList = Boolean(repoInfo.list.length)

  return (
    <>
      <Search
        placeholder="search repository..."
        onSearch={onSearch}
        enterButton
        style={{ marginTop: '20px' }}
      />
      <Spin spinning={loading}>
        {showList && <ReposList repoInfo={repoInfo} pagination={pagination} />}
      </Spin>
    </>
  )
}
