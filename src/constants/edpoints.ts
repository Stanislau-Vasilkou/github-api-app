import qs from 'qs'

import { Query, SearchInstances } from './types'

const search = (instance: SearchInstances, queriesConfig: Query): string => {
  const queries = qs.stringify(queriesConfig)
  return `search/${instance}?${queries}`
}

export const url = {
  search: (instance: SearchInstances, queriesConfig: Query) =>
    search(instance, queriesConfig),
  getRepos: (username: string, repo: string): string =>
    `/repos/${username}/${repo}`,
  getIssues: (username: string, repo: string): string =>
    `/repos/${username}/${repo}/issues`,
  getIssue: (username: string, repo: string, issue: number): string =>
    `/repos/${username}/${repo}/issues/${issue}`,
}
