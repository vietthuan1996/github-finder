import React from 'react';
import { RepoItemType } from '../../type';
import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa';

type Props = {
  repoItem: RepoItemType;
};

const RepoItem = (props: Props) => {
  const { repoItem } = props;
  return (
    <div className='card rounded-md bg-base-200 mb-2 hover:bg-base-300'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={repoItem.html_url}>
            <FaLink className='inline mr-1' />
            {repoItem.name}
          </a>
        </h3>
        <p className='mb-3'>{repoItem.description}</p>
        <div>
          <div className='badge badge-outline badge-lg mr-1'>
            <FaEye className='mr-2' />
            {repoItem.watcher_count}
          </div>
          <div className='badge badge-outline badge-lg mr-1'>
            <FaStar className='mr-2' />
            {repoItem.stargazers_count}
          </div>
          <div className='badge badge-outline badge-lg mr-1'>
            <FaInfo className='mr-2' />
            {repoItem.open_issues}
          </div>
          <div className='badge badge-outline badge-lg mr-1'>
            <FaUtensils className='mr-2' />
            {repoItem.forks}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoItem;
