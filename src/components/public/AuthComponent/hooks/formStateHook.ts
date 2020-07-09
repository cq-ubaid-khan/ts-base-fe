import { useState } from 'react';

const SUCCESS_CODE = 200;

const useFormStateHook = <T> (states: T, authHandler: Function, ...otherData: any) => {
  const [appState, setAppState] = useState<T>(states);
  const [successToast, setSuccessToast] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const updateState = (key: string, value: string) => {
    setAppState({ ...appState, [key]: value });
  };

  // @ts-ignore
  const getState = (key: string):string => appState[key];

  const clearState = () => {
    setAppState(states);
    setErrorMessage('');
  };

  const onHandleResponse = async () => {
    const resp = await authHandler(appState, ...otherData);

    if (resp.status !== SUCCESS_CODE) setErrorMessage(resp.body.message);
    else {
      setSuccessToast(resp.body.message);
      clearState();
    }

    return { data: resp.body, success: resp.status === SUCCESS_CODE, resp };
  };

  return {
    getState,
    updateState,
    onHandleResponse,
    clearState,
    successToast,
    errorMessage,
    setSuccessToast,
  };
};

export default useFormStateHook;
