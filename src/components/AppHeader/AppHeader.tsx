import React, { FC, memo } from 'react'
import { Link } from 'react-router-dom'
import { Col, Layout, Menu, Row, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import './styles.scss'

const { Header } = Layout

const AppHeader: FC = () => (
  <Header className="app-header">
    <Row>
      <Col>
        <Link to="/">
          <Space align="center">
            <div className="app-header__logo-wrapper">
              <GithubOutlined className="app-header__logo" />
            </div>
            GitHub
          </Space>
        </Link>
      </Col>
      <Col span={1} />
      <Col span={10}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Repos</Menu.Item>
        </Menu>
      </Col>
    </Row>
  </Header>
)

export const MemoizedAppHeader = memo(AppHeader)
