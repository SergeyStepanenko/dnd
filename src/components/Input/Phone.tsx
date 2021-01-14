import React from 'react';
import { palette } from '@/constants';
import IconReset from '../Icons/Reset';
import PhoneInput from 'react-phone-input-2';
import * as S from './Phone.styled';

interface IInputPhoneProps {
  label: string;
  name: string;
  value: string;
  onChange: (phone: string) => void;
  onReset: (name: string) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputPhone: React.FC<IInputPhoneProps> = (props) => {
  const { label, name, value, onChange, onReset, onBlur, error } = props;

  const handleReset = () => {
    onReset(name);
  };

  return (
    <S.Label>
      <p>{label}</p>
      <S.InputWrapper isError={!!error}>
        <PhoneInput
          value={value}
          onChange={onChange}
          placeholder="+1 (123) 456-78-90"
        />
        {value || error ? (
          <S.Reset onClick={handleReset}>
            <IconReset {...(error && { fill: palette.red })} />
          </S.Reset>
        ) : null}
      </S.InputWrapper>
      {!!error && <S.ErrorText mt="9px">{error}</S.ErrorText>}
    </S.Label>
  );
};

export default InputPhone;
