import { GithubAction, GithubStateType } from '../../type';

const gitHubReducer = (state: GithubStateType, action: GithubAction) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload.users,
        loading: false,
      };
    case 'GET_USER':
      return {
        ...state,
        user: action.payload.user,
        loading: false,
      };
    case 'GET_USER_REPO':
      return {
        ...state,
        repoItems: action.payload.repoItems,
        loading: false,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload.loading,
      };
    default:
      return state;
  }
};

export { gitHubReducer };
