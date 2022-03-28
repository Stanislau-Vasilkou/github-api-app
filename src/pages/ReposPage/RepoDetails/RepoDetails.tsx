import React, { FC, memo } from 'react'
import { Button, Modal, Space, Typography } from 'antd'
import { BookOutlined, StarOutlined } from '@ant-design/icons'

import { RepoCard } from '../RepoCard'
import { useSwitch } from '../../../hooks'
import { Repo } from '../../../constants/types'

import './styles.scss'

interface Props {
  repo: Repo
}

const { Link } = Typography

const RepoDetails: FC<Props> = ({ repo }) => {
  const { owner, name, stargazers_count, description, html_url } = repo
  const { login } = owner

  const [isModalOpen, closeModal, openModal] = useSwitch()

  return (
    <Space direction="vertical" size="small" className="repo-details">
      <Space size="large" className="repo-details__header">
        <Space size="small">
          <BookOutlined />
          <Link href={html_url} target="_blank">
            {`${login}/${name}`}
          </Link>
        </Space>
        <Button onClick={openModal}>More...</Button>
      </Space>
      <p className="repo-details__description">
        {description || 'No description'}
      </p>
      <Space size="small">
        <StarOutlined />
        {stargazers_count}
      </Space>
      <Modal
        visible={isModalOpen}
        onCancel={closeModal}
        footer={null}
        width={700}
      >
        <RepoCard repo={repo} />
      </Modal>
    </Space>
  )
}

export const memoizedRepoDetails = memo(RepoDetails)
