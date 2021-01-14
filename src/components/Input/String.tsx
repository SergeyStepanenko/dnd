import React from 'react';
import { palette } from '@/constants';
import IconReset from '../Icons/Reset';
import * as S from './String.styled';

interface IInputStringProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: (name: string) => void;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputString: React.FC<IInputStringProps> = (props) => {
  const {
    label,
    name,
    value,
    placeholder,
    onChange,
    onReset,
    onBlur,
    error,
  } = props;

  const handleReset = () => {
    onReset(name);
  };

  return (
    <S.Label>
      <p>{label}</p>
      <S.InputWrapper>
        <S.Input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={50}
          onChange={onChange}
          onBlur={onBlur}
          isError={!!error}
          autoComplete="on"
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

export default InputString;
