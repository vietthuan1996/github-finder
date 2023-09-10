type UserItemType = {
  id: number;
  login: string;
  avatar_url: string;
  name: string;
  type: string;
  location: string;
  bio: string;
  blog: string;
  twitter_username: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
  public_gists: number;
  hireable: any;
};

type RepoItemType = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks: number;
  open_issues: number;
  watcher_count: number;
  stargazers_count: number;
};

type GithubStateType = {
  users?: UserItemType[];
  user?: UserItemType;
  repoItems?: RepoItemType[] | [];
  loading?: boolean;
};

type AlertStateType = {
  msg?: string;
  msgType?: string;
};

type GithubAction = {
  type: string;
  payload: GithubStateType;
};

export type {
  UserItemType,
  GithubStateType,
  AlertStateType,
  RepoItemType,
  GithubAction,
};
