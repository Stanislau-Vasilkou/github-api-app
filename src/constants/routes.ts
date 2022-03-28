export const routes = {
  home: '/',

  repository: (login: string, name: string) => `/repository/${login}/${name}`,
  r_repository: `/repository/:login/:name`,
}
