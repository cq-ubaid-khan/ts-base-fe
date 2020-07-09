import React from 'react';
import TextValidatorInput from '../../sharedModules/TextValidatorInput';

interface IPasswordFormComponentProps {
  value: string,
  onChange: (e: string) => void,
  label: string,
}

const PasswordFormComponent = (
  { value, onChange, label }: IPasswordFormComponentProps,
) => (
  <TextValidatorInput
    label={label || 'Password'}
    type="password"
    name="password"
    value={value}
    validators={['required', 'minStringLength:6']}
    validatorMessages={['Please enter your Password', 'Password must be at least 6 or more characters']}
    onChange={onChange}
  />
);

PasswordFormComponent.defaultProps = {
  label: '',
  value: '',
};

export default PasswordFormComponent;
