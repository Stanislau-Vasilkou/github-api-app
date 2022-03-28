import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { message } from 'antd'

import { get } from '../services/github-api-service'
import { Query, SearchInstances, SearchResponse } from '../constants/types'
import { url } from '../constants/edpoints'

export const useSearchApi = <T>(
  queries: Query,
  instance: SearchInstances,
  setResp: Dispatch<SetStateAction<T>>,
): boolean => {
  const [loading, setLoading] = useState<boolean>(false)

  const search = async () => {
    setLoading(true)
    try {
      const resp = await get<SearchResponse>(url.search(instance, queries))
      setResp((prev) => ({
        ...prev,
        list: resp.data.items,
        totalCount: resp.data.total_count,
      }))
    } catch (error: any) {
      message.error(
        `This is an error message for: ${instance} search request. ${error.response.data.message}`,
      )
    }
    setLoading(false)
  }

  useEffect(() => {
    if (queries.q) search()
  }, [queries])

  return loading
}
