import React from 'react'
import { Col, Layout, Row } from 'antd'

import { AppHeader } from './components/AppHeader'
import { Router } from './components/Router'

const { Content } = Layout

export const App = () => (
  <Layout>
    <AppHeader />
    <Content>
      <Row justify="center">
        <Col span={14}>
          <Router />
        </Col>
      </Row>
    </Content>
  </Layout>
)
