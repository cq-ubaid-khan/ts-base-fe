import React from 'react';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import { authRegister } from '../../service/authService';
import FormWrapper from '../../sharedModules/FormWrapper/FormWrapper';
import useFormStateHook from '../../hooks/formStateHook';
import EmailFormComponent from '../shared/EmailFormComponent';
import PasswordFormComponent from '../shared/PasswordFormComponent';
import TextFormComponent from '../shared/TextFormComponent';
import { useAuth } from '../../context/auth';
import RegisterModel from '../../models/registerModel';
import { appEnvConfig } from '../../../../../base/loaders/baseLoader';

const bkUrl = appEnvConfig.bk.fullUrl();

const RegisterComponent = () => {
  const registerModel = new RegisterModel();
  const { setAuthenticated } = useAuth();
  const {
    getState,
    updateState,
    onHandleResponse,
    errorMessage,
    successToast,
    setSuccessToast,
  } = useFormStateHook(registerModel, authRegister.bind(null, bkUrl));

  const onSubmitHandler = async () => {
    const { success } = await onHandleResponse();

    if (success) {
      setAuthenticated(true);
      // history.push('/dashboard?verify');
    }
  };

  return (
    <FormWrapper
      title="Register"
      onFormSubmit={onSubmitHandler}
      errorMessage={errorMessage}
      avatarIcon={<PersonPinIcon color="primary" />}
      footerLinks={[
        { url: '/login', text: 'Already have account? Sign In' },
      ]}
      successToast={successToast}
      setSuccessToast={setSuccessToast}
    >
      {/* first name */}
      <TextFormComponent
        label="First Name"
        value={getState('firstName')}
        onChange={(v: string) => updateState('firstName', v)}
        validatorMessages={['Please enter your first name']}
      />
      {/* last name */}
      <TextFormComponent
        label="Last Name"
        value={getState('lastName')}
        onChange={(v: string) => updateState('lastName', v)}
        validatorMessages={['Please enter your last name']}
      />
      {/* email */}
      <EmailFormComponent value={getState('email')} onChange={(v: string) => updateState('email', v)} />
      {/* password */}
      <PasswordFormComponent value={getState('password')} onChange={(v: string) => updateState('password', v)} />
    </FormWrapper>
  );
};

export default RegisterComponent;
