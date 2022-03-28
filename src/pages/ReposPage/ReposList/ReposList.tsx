import React, { FC, memo } from 'react'
import { List, Typography } from 'antd'
import { PaginationConfig } from 'antd/lib/pagination'

import { RepoDetails } from '../RepoDetails'
import { Repo } from '../../../constants/types'

interface Props {
  repoInfo: ReposState
  pagination: PaginationConfig
}

type ReposState = {
  list: Repo[]
  totalCount: number
}

export const ReposList: FC<Props> = ({ repoInfo, pagination }) => {
  const result = repoInfo.totalCount
    ? `Showing ${repoInfo.totalCount} available repository results`
    : 'No results'

  return (
    <>
      <Typography.Title level={3} style={{ marginTop: '20px' }}>
        {result}
      </Typography.Title>
      <List
        itemLayout="vertical"
        size="large"
        bordered
        pagination={pagination}
        dataSource={repoInfo.list}
        renderItem={(item) => (
          <List.Item key={item.id}>
            <RepoDetails repo={item} />
          </List.Item>
        )}
      />
    </>
  )
}

export const memoizedReposList = memo(ReposList)
