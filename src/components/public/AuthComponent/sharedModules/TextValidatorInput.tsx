import { TextValidator } from 'react-material-ui-form-validator';
import React from 'react';

interface ITextValidatorInputProps {
  variant: string,
  id: string,
  type: string,
  margin: string,
  required: boolean,
  fullWidth: boolean,
  name: string,
  label: string,
  autoComplete: string,
  autoFocus: boolean,
  value: string,
  validators: any[],
  validatorMessages: any[],
  onChange: (e: string) => void,
}

const TextValidatorInput = ({
  id, type, margin, required, fullWidth, name, label, autoComplete,
  autoFocus, value, validators, validatorMessages, onChange, variant,
}: ITextValidatorInputProps) => (
  <TextValidator
    variant={variant}
    type={type}
    margin={margin}
    required={required}
    fullWidth={fullWidth}
    id={name}
    label={label}
    name={id || name}
    autoComplete={autoComplete}
    autoFocus={autoFocus}
    value={value}
    validators={validators}
    errorMessages={validatorMessages}
    onChange={(e: React.FormEvent<HTMLInputElement>) => onChange(e.currentTarget.value)}
  />
);

export default TextValidatorInput;

TextValidatorInput.defaultProps = {
  variant: 'outlined',
  id: '',
  type: 'text',
  margin: 'normal',
  required: true,
  fullWidth: true,
  name: '',
  label: '',
  autoComplete: 'on',
  autoFocus: false,
  value: '',
  validators: [],
  validatorMessages: [],
};
