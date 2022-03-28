import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Col, Row, Space, Typography } from 'antd'

import { routes } from '../../constants/routes'

export const NotFound: FC = () => (
  <Row align="middle" justify="center">
    <Col>
      <Space direction="vertical" align="center">
        <Typography.Title level={1} style={{ margin: 0 }}>
          404 Page Not Found
        </Typography.Title>
        <Link to={routes.home}>home page</Link>
      </Space>
    </Col>
  </Row>
)
