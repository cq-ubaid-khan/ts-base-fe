import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import FormWrapper from '../../sharedModules/FormWrapper/FormWrapper';
import useFormStateHook from '../../hooks/formStateHook';
import { authLogin } from '../../service/authService';
import EmailFormComponent from '../shared/EmailFormComponent';
import PasswordFormComponent from '../shared/PasswordFormComponent';
import { useAuth } from '../../context/auth';
import { appEnvConfig } from '../../../../../base/loaders/baseLoader';
import LoginModel from '../../models/LoginModel';

const bkUrl = appEnvConfig.bk.fullUrl();

const LoginComponent = () => {
  const { setAuthenticated } = useAuth();
  const loginModel = new LoginModel();

  const {
    getState,
    updateState,
    onHandleResponse,
    errorMessage,
    successToast,
    setSuccessToast,
  } = useFormStateHook(loginModel, authLogin.bind(null, bkUrl));

  const onSubmitHandler = async () => {
    const { success } = await onHandleResponse();
    if (success) {
      setAuthenticated(true);
      // history.push('/dashboard');
    }
  };

  return (
    <>
      <Link component={NavLink} to="/logout" variant="body2" align="center" style={{ display: 'block', width: '100%' }}>
        Logout
      </Link>
      <FormWrapper
        title="Login"
        onFormSubmit={onSubmitHandler}
        errorMessage={errorMessage}
        avatarIcon={<AccountCircleIcon color="primary" />}
        footerLinks={[
          { url: '/register', text: "Don't have an account? Sign Up" },
        ]}
        successToast={successToast}
        setSuccessToast={setSuccessToast}
      >
        {/* email */}
        <EmailFormComponent value={getState('email')} onChange={(v) => updateState('email', v)} />
        {/* password */}
        <PasswordFormComponent value={getState('password')} onChange={(v) => updateState('password', v)} />
      </FormWrapper>
    </>
  );
};

export default LoginComponent;
