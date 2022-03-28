import React, { FC, memo } from 'react'
import { Col, Progress, Row, Space, Typography } from 'antd'

type Props = {
  languages: Record<string, number>
}

const { Text } = Typography

const LanguagesPercents: FC<Props> = ({ languages }) => {
  const languagesNames = Object.keys(languages)

  const summary = languagesNames.reduce(
    (sum, value) => sum + languages[value],
    0,
  )
  const getContent = (
    lang: string,
    percent: number | undefined,
  ): JSX.Element => (
    <Space direction="vertical">
      <Text ellipsis style={{ fontSize: '0.7em' }}>
        {lang}
      </Text>
      <Text style={{ fontSize: '0.8em' }}>{`${percent}%`}</Text>
    </Space>
  )

  return (
    <Row>
      <Col span={24}>
        <Space size="large" wrap>
          {languagesNames.map((lang) => (
            <Progress
              key={lang}
              width={80}
              type="circle"
              percent={Number(((languages[lang] / summary) * 100).toFixed(2))}
              format={(percent) => getContent(lang, percent)}
            />
          ))}
        </Space>
      </Col>
    </Row>
  )
}

export const memoizedLanguagesPercents = memo(LanguagesPercents)
