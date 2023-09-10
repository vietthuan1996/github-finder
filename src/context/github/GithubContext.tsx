import { PropsWithChildren, createContext, useReducer } from 'react';
import { GithubAction, GithubStateType } from '../../type';
import { gitHubReducer } from './GithubReducer';

type Props = PropsWithChildren;
type GithubContextType = GithubStateType & {
  clearUsers: () => void;
  dispatch: (value: GithubAction) => void;
};

const defaultContextValue: GithubContextType = {
  users: [],
  repoItems: [],
  loading: false,
  clearUsers: () => {},
  dispatch: (value: GithubAction) => {},
};

const GithubContext = createContext<GithubContextType>(defaultContextValue);

const GithubProvider = (props: Props) => {
  const [githubState, dispatch] = useReducer(
    gitHubReducer,
    defaultContextValue
  );

  const clearUsers = () => {
    dispatch({
      type: 'GET_USERS',
      payload: {
        users: [],
      },
    });
  };

  return (
    <GithubContext.Provider
      value={{
        users: githubState.users,
        user: githubState.user,
        repoItems: githubState.repoItems,
        loading: githubState.loading,
        clearUsers,
        dispatch,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
