import React, { FC, memo } from 'react'
import { Avatar, List, Space, Typography } from 'antd'
import moment from 'moment'
import { PaginationConfig } from 'antd/lib/pagination'

import {
  DateFormats,
  Issue,
  PaginatedState,
  TimeStates,
} from '../../../../constants/types'
import { getDate } from '../../../../utils/dateProcessors'

interface Props {
  issuesInfo: IssueState
  pagination: PaginationConfig
  issueState: TimeStates
}

type IssueState = PaginatedState<Issue>

const { Text, Title } = Typography

const IssuesList: FC<Props> = ({ issuesInfo, pagination, issueState }) => {
  return (
    <List
      itemLayout="vertical"
      size="large"
      pagination={pagination}
      bordered
      dataSource={issuesInfo.list}
      renderItem={(item) => (
        <List.Item key={item.id}>
          <Title level={5}>{item.title}</Title>
          <Space size="large">
            <Text type="secondary">{`#${item.number}`}</Text>
            <Space>
              <Avatar size="small" src={item.user.avatar_url} />
              <Text type="secondary">{`author: ${item.user.login}`}</Text>
            </Space>
            {issueState === TimeStates.open ? (
              <Text type="secondary">{`opened: ${moment(
                item.created_at,
              ).fromNow()}`}</Text>
            ) : (
              <Text type="secondary">{`closed ${getDate(
                item.closed_at,
                DateFormats.STANDARD,
              )}`}</Text>
            )}
          </Space>
        </List.Item>
      )}
    />
  )
}

export const memoizedIssuesList = memo(IssuesList)
