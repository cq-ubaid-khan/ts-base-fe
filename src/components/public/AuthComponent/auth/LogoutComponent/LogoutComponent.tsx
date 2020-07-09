import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useTranslate } from 'react-polyglot';
import { authLogout } from '../../service/authService';
import { useAuth } from '../../context/auth';
import { appEnvConfig } from '../../../../../base/loaders/baseLoader';

const bkUrl = appEnvConfig.bk.fullUrl();

const LogoutComponent = () => {
  const t = useTranslate();
  const { setAuthenticated } = useAuth();
  const history = useHistory();

  useEffect(() => {
    (async () => {
      const logoutCall = await authLogout(bkUrl);
      if (logoutCall.status !== 200) window.alert('Failed to logout');
      else {
        setAuthenticated(false);
        history.push('/login');
      }
    })();
  }, [history, setAuthenticated, t]);

  return <></>;
};

export default LogoutComponent;
