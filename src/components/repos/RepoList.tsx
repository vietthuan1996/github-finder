import React from 'react';
import { RepoItemType } from '../../type';
import RepoItem from './RepoItem';

type Props = {
  repoItems: RepoItemType[];
};

const RepoList = (props: Props) => {
  const { repoItems } = props;

  return (
    <div className='shadow-lg rounded-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>Top Repositories</h2>
        {repoItems &&
          repoItems.map((repo) => {
            return <RepoItem key={repo.id} repoItem={repo} />;
          })}
      </div>
    </div>
  );
};

export default RepoList;
