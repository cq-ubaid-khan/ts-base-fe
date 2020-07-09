import React from 'react';
import TextValidatorInput from '../../sharedModules/TextValidatorInput';

interface IPasswordFormComponentProps {
  value: string,
  onChange: (e: string) => void,
  label: string,
  validatorMessages: any[]
}

const TextFormComponent = ({
  value, onChange, label, validatorMessages,
}: IPasswordFormComponentProps) => (
  <TextValidatorInput
    label={label}
    type="text"
    value={value}
    validators={['required']}
    validatorMessages={validatorMessages}
    onChange={onChange}
  />
);

TextFormComponent.defaultProps = {
  value: '',
  validatorMessages: [],
};

export default TextFormComponent;
