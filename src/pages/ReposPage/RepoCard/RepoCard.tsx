import React, { FC, memo } from 'react'
import { Avatar, Card, Space, Tabs, Typography } from 'antd'

import { Repo } from '../../../constants/types'

import { GeneralInfo } from './GeneralInfo'
import { Issues } from './Issues'

import './styles.scss'

interface Props {
  repo: Repo
}

const { Link } = Typography
const { TabPane } = Tabs

const RepoCard: FC<Props> = ({ repo }) => {
  const { owner, name, html_url } = repo

  const cardTitle = (
    <Space>
      <Avatar size={64} src={owner.avatar_url} />
      <Link href={owner.html_url} target="_blank">
        {owner?.login}
      </Link>
      /
      <Link href={html_url} target="_blank">
        {name}
      </Link>
    </Space>
  )

  return (
    <Card title={cardTitle} className="repo-card" bordered={false}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Info" key="1">
          <GeneralInfo repo={repo} />
        </TabPane>
        <TabPane tab="Issues" key="2">
          <Issues repo={repo} />
        </TabPane>
      </Tabs>
    </Card>
  )
}

export const memoizedRepoCard = memo(RepoCard)
