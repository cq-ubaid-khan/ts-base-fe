import React from 'react';
import TextValidatorInput from '../../sharedModules/TextValidatorInput';

interface IEmailFormComponentProps {
  value: string,
  onChange: (e: string) => void
}

const EmailFormComponent = (
  { value, onChange }: IEmailFormComponentProps,
) => (
  <TextValidatorInput
    label="Email Address"
    type="email"
    name="email"
    value={value}
    validators={['required', 'isEmail']}
    validatorMessages={['Please enter your Email Address', 'Invalid Email Address pattern']}
    onChange={onChange}
  />
);

EmailFormComponent.defaultProps = {
  value: '',
};

export default EmailFormComponent;
