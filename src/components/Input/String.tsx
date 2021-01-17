import React from 'react';
import * as S from './String.styled';
import ResetButton from '../ResetButton';

interface IInputStringProps {
  className?: string;
  label?: string;
  name: string;
  value: string;
  placeholder: string;
  maxLength?: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onReset: (name: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputString: React.FC<IInputStringProps> = (props) => {
  const {
    className,
    label,
    name,
    value,
    placeholder,
    maxLength = 50,
    onChange,
    onReset,
    onBlur,
    error,
  } = props;

  const handleReset = () => {
    onReset(name);
  };

  return (
    <S.InputContainer className={className}>
      {!!label && <label>{label}</label>}
      <S.InputWrapper>
        <S.Input
          type="text"
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          isError={!!error}
          autoComplete="on"
        />
        {!!value && <ResetButton onClick={handleReset} isError={!!error} />}
      </S.InputWrapper>
      {!!error && <S.ErrorText mt="9px">{error}</S.ErrorText>}
    </S.InputContainer>
  );
};

export default InputString;
