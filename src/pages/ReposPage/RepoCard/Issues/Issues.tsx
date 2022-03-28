import React, { FC, ReactElement, memo, useState } from 'react'
import { Tabs } from 'antd'
import { PieChart } from 'react-minimal-pie-chart'
import { LabelRenderProps } from 'react-minimal-pie-chart/types/Label'

import { IssuesList } from '../IssuesList'
import {
  Issue,
  IssueSortItems,
  PaginatedState,
  Query,
  Repo,
  SearchInstances,
  TimeStates,
} from '../../../../constants/types'
import { usePagination, useSearchApi } from '../../../../hooks'

interface Props {
  repo: Repo
}

interface IssueQuery extends Query {
  sort?: IssueSortItems
}

type IssuesState = PaginatedState<Issue>

const initialIssuesState = {
  list: [],
  totalCount: 0,
}

const createIssueQuery = (repo: string, state: TimeStates): string =>
  `type:issue repo:${repo} is:${state}`

const initialQueriesState = (repo: string, state: TimeStates): IssueQuery => ({
  q: createIssueQuery(repo, state),
  sort: undefined,
  order: undefined,
  per_page: 10,
  page: 1,
})

const { TabPane } = Tabs

const renderLabel = ({
  dataEntry,
  x,
  y,
  dx,
  dy,
}: LabelRenderProps): ReactElement => {
  const { title, percentage } = dataEntry
  return (
    <text
      key={title}
      x={x}
      y={y}
      dx={dx}
      dy={dy}
      dominantBaseline="central"
      textAnchor="middle"
      style={{
        fontSize: '3px',
      }}
    >
      {`${title}(${percentage.toFixed(2)}%)`}
    </text>
  )
}

const Issues: FC<Props> = ({ repo }) => {
  const { full_name } = repo
  const [openIssues, setOpenIssues] = useState<IssuesState>(initialIssuesState)
  const [closedIssues, setClosedIssues] =
    useState<IssuesState>(initialIssuesState)
  const [openQueries, setOpenQueries] = useState<IssueQuery>(
    initialQueriesState(full_name, TimeStates.open),
  )
  const [closedQueries, setClosedQueries] = useState<IssueQuery>(
    initialQueriesState(full_name, TimeStates.closed),
  )

  useSearchApi(openQueries, SearchInstances.issues, setOpenIssues)

  const openIssuesPagination = usePagination(
    openQueries,
    setOpenQueries,
    openIssues.totalCount,
  )

  useSearchApi(closedQueries, SearchInstances.issues, setClosedIssues)

  const closedIssuesPagination = usePagination(
    closedQueries,
    setClosedQueries,
    closedIssues.totalCount,
  )

  const showOpenList = Boolean(openIssues.list.length)
  const showClosedList = Boolean(closedIssues.list.length)

  const pieData = [
    {
      color: '#0ced97',
      key: 1,
      title: TimeStates.closed,
      value: closedIssues.totalCount,
    },
    {
      color: '#1890ff',
      key: TimeStates.open,
      title: TimeStates.open,
      value: openIssues.totalCount,
    },
  ]

  return (
    <Tabs defaultActiveKey="1" tabPosition="right">
      <TabPane
        tab={`Open(${openIssues.totalCount})`}
        key="1"
        disabled={!showOpenList}
      >
        <IssuesList
          issuesInfo={openIssues}
          pagination={openIssuesPagination}
          issueState={TimeStates.open}
        />
      </TabPane>
      <TabPane
        tab={`Closed(${closedIssues.totalCount})`}
        key="2"
        disabled={!showClosedList}
      >
        <IssuesList
          issuesInfo={closedIssues}
          pagination={closedIssuesPagination}
          issueState={TimeStates.closed}
        />
      </TabPane>
      <TabPane tab="Chart" key="3" disabled={!showClosedList && !showOpenList}>
        <PieChart data={pieData} animate label={renderLabel} />
      </TabPane>
    </Tabs>
  )
}

export const memoizedIssues = memo(Issues)
