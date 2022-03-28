export const enum SearchInstances {
  repos = 'repositories',
  issues = 'issues',
}

export const enum TimeStates {
  open = 'open',
  closed = 'closed',
}

export const enum DateFormats {
  STANDARD = 'MMM DD,YYYY',
  STANDARD_TIME = 'MMM DD,YYYY hh:mm',
}

export const enum RepoSortItems {
  updated = 'updated',
  stars = 'stars',
  forks = 'forks',
  help_wanted_issues = 'help-wanted-issues',
}

export const enum IssueSortItems {
  comments = 'comments',
  reactions = 'reactions',
  'reactions-+1' = 'reactions-+1',
  'reactions--1' = 'reactions--1',
  'reactions-smile' = 'reactions-smile',
  'reactions-thinking_face' = 'reactions-thinking_face',
  'reactions-heart' = 'reactions-heart',
  'reactions-tada' = 'reactions-tada',
  interactions = 'interactions',
  updated = 'updated',
  created = 'created',
}

export interface User {
  avatar_url: string
  events_url: string
  followers_url: string
  following_url: string
  gists_url: string
  gravatar_id: string
  html_url: string
  id: number
  login: string
  node_id: string
  organizations_url: string
  received_events_url: string
  repos_url: string
  site_admin: boolean
  starred_url: string
  subscriptions_url: string
  type: string
  url: string
}

export interface Licence {
  key: string
  name: string
  node_id: string
  spdx_id: string
  url: string
}

export interface Repo {
  allow_forking: boolean
  archive_url: string
  archived: boolean
  assignees_url: string
  blobs_url: string
  branches_url: string
  clone_url: string
  collaborators_url: string
  comments_url: string
  commits_url: string
  compare_url: string
  contents_url: string
  contributors_url: string
  created_at: string
  default_branch: string
  deployments_url: string
  description: string
  disabled: boolean
  downloads_url: string
  events_url: string
  fork: boolean
  forks: number
  forks_count: number
  forks_url: string
  full_name: string
  git_commits_url: string
  git_refs_url: string
  git_tags_url: string
  git_url: string
  has_downloads: boolean
  has_issues: boolean
  has_pages: boolean
  has_projects: boolean
  has_wiki: boolean
  homepage: string
  hooks_url: string
  html_url: string
  id: number
  is_template: boolean
  issue_comment_url: string
  issue_events_url: string
  issues_url: string
  keys_url: string
  labels_url: string
  language: string
  languages_url: string
  license: Licence
  merges_url: string
  milestones_url: string
  mirror_url: null
  name: string
  node_id: string
  notifications_url: string
  open_issues: number
  open_issues_count: number
  owner: User
  private: false
  pulls_url: string
  pushed_at: string
  releases_url: string
  score: number
  size: number
  ssh_url: string
  stargazers_count: number
  stargazers_url: string
  statuses_url: string
  subscribers_count: number
  subscribers_url: string
  subscription_url: string
  svn_url: string
  tags_url: string
  teams_url: string
  topics: any[]
  trees_url: string
  updated_at: string
  url: string
  visibility: string
  watchers: number
  watchers_count: number
}

export interface Issue {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: 1
  title: string
  user: User
  labels: any[]
  state: string
  locked: false
  assignee: null
  assignees: any[]
  milestone: {
    url: string
    html_url: string
    labels_url: string
    id: number
    node_id: string
    number: number
    title: string
    description: string
    creator: User
    open_issues: number
    closed_issues: number
    state: string
    created_at: string
    updated_at: string
    due_on: string
    closed_at: string
  }
  comments: number
  created_at: string
  updated_at: string
  closed_at: string
  author_association: string
  active_lock_reason: null
  body: string
  closed_by: null
  reactions: {
    url: string
    total_count: number
    [+1]: number
    [-1]: number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: boolean
}

export interface SearchResponse {
  incomplete_results: boolean
  items: any[]
  total_count: number
}

export interface PaginatedState<T> {
  list: T[]
  totalCount: number
}

export interface Query {
  q: string
  order?: 'asc' | 'desc'
  per_page?: number
  page?: number
}
