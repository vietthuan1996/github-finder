import React, { PropsWithChildren, createContext, useReducer } from 'react';
import { alertReducer } from './AlertReducer';
import { AlertStateType } from '../../type';

type AlertContextType = {
  alert: AlertStateType | null;
  setAlert: (msg: string, type: string) => void;
};

const defaultContextValue = {
  alert: null,
  setAlert: (msg: string, type: string) => {},
};

const AlertContext = createContext<AlertContextType>(defaultContextValue);

const AlertProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const setAlert = (msg: string, type: string) => {
    dispatch({
      type: 'SET_ALERT',
      payload: {
        msg,
        msgType: type,
      },
    });

    setTimeout(
      () =>
        dispatch({
          type: 'CLEAR',
          payload: {},
        }),
      3000
    );
  };
  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export { AlertProvider, AlertContext };
