import { RepoItemType, UserItemType } from '../../type';

const searchUsers = async (text: string): Promise<UserItemType[]> => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await fetch(
    `${process.env.REACT_APP_GITHUB_API_URL}/search/users?${params}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );

  const { items } = await res.json();
  return items;
};

const getUser = async (userName: string) => {
  const res = await fetch(
    `${process.env.REACT_APP_GITHUB_API_URL}/users/${userName}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );

  const user = await res.json();
  return user;
};

const getUserRepos = async (userName: string): Promise<RepoItemType[]> => {
  const params = new URLSearchParams({
    sort: 'created',
    per_page: '10',
  });

  const res = await fetch(
    `${process.env.REACT_APP_GITHUB_API_URL}/users/${userName}/repos?${params}`,
    {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    }
  );

  return await res.json();
};

export { searchUsers, getUser, getUserRepos };
