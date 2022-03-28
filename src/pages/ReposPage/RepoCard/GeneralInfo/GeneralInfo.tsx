import React, { FC, memo, useEffect, useState } from 'react'
import axios from 'axios'
import { Space, Typography } from 'antd'
import {
  EyeOutlined,
  ForkOutlined,
  InfoCircleOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons'

import { LanguagesPercents } from '../../../../components/LanguagesPercents'
import { DateFormats, Repo } from '../../../../constants/types'
import { getDate } from '../../../../utils/dateProcessors'
import { isEmptyObject } from '../../../../utils/objectProcessors'

import './styles.scss'

interface Props {
  repo: Repo
}

const { Link, Text } = Typography

const GeneralInfo: FC<Props> = ({ repo }) => {
  const [languages, setLanguages] = useState<Record<string, number>>({})
  const {
    description,
    stargazers_count,
    subscribers_count,
    watchers_count,
    forks,
    language,
    updated_at,
    homepage,
    languages_url,
  } = repo

  const getLanguages = async () => {
    const resp = await axios.get(languages_url)
    setLanguages(resp.data)
  }

  useEffect(() => {
    getLanguages()
  }, [])

  const homePageParagraph = homepage && (
    <Link href={homepage} target="_blank">
      {homepage}
    </Link>
  )

  const languageParagraph = language && (
    <Space size="small">
      <InfoCircleOutlined color="blue" />
      {language}
    </Space>
  )

  const languagesSection = !isEmptyObject(languages) && (
    <LanguagesPercents languages={languages} />
  )

  return (
    <Space direction="vertical" className="repo-general-info">
      <p>{description || 'No description'}</p>
      {homePageParagraph}
      <Space size="large">
        <Space>
          <ForkOutlined title="forks" />
          <Text>{forks || 0}</Text>
        </Space>
        <Space>
          <StarOutlined title="stars" />
          <Text>{stargazers_count || 0}</Text>
        </Space>
        <Space>
          <TeamOutlined title="subscribers" />
          <Text>{subscribers_count || 0}</Text>
        </Space>
        <Space>
          <EyeOutlined title="watchers" />
          <Text>{watchers_count || 0}</Text>
        </Space>
        {languageParagraph}
      </Space>
      <p>{`Updated on: ${getDate(updated_at, DateFormats.STANDARD)}`}</p>
      {languagesSection}
    </Space>
  )
}

export const memoizedGeneralInfo = memo(GeneralInfo)
