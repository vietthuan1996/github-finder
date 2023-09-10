import React from 'react';
import { UserItemType } from '../../type';
import { Link } from 'react-router-dom';

type Props = {
  userItem: UserItemType;
};

const UserItem = (props: Props) => {
  const { userItem } = props;
  return (
    <div className='card shadow-md card-compact card-side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className='avatar'>
          <div className='rounded-full shadow w-14 h-14'>
            <img src={userItem.avatar_url} alt='Profile' />
          </div>
        </div>
        <div>
          <h2 className='card-title'>{userItem.login}</h2>
          <Link
            to={`/user/${userItem.login}`}
            className='text-base-content text-opacity-40'
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
