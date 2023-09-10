import { FormEvent, useContext, useState } from 'react';
import { GithubContext } from '../../context/github/GithubContext';
import { AlertContext } from '../../context/alert/AlertContext';
import { searchUsers } from '../../context/github/GithubAction';

type Props = {};

const UserSearch = (props: Props) => {
  const [text, setText] = useState('');
  const { users, clearUsers, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (text.length < 3) {
      setAlert('Please enter something', 'error');
    }

    if (text.length > 3) {
      dispatch({
        type: 'LOADING',
        payload: {
          loading: true,
        },
      });
      const items = await searchUsers(text);
      dispatch({
        type: 'GET_USERS',
        payload: {
          users: items,
        },
      });
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:lg:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit} action=''>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                name=''
                id=''
                className='w-full input input-lg text-black'
                placeholder='Search...'
                onChange={(e) => setText(e.target.value)}
                value={text}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 btn btn-lg rounded-l-none w-36'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users!.length > 0 && (
        <div>
          <button className='btn btn-ghost btn-lg' onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
