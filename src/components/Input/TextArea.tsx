import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import ResetButton from '../ResetButton';
import * as S from './TextArea.styled';

interface IInputTextAreaProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  maxLength?: number;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onReset: (name: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  error?: string;
}

const InputTextArea: React.FC<IInputTextAreaProps> = (props) => {
  const {
    label,
    name,
    value,
    placeholder,
    maxLength = 255,
    onChange,
    onReset,
    onBlur,
    error,
  } = props;

  const handleReset = () => {
    onReset(name);
  };

  return (
    <S.InputContainer>
      <label htmlFor={name}>{label}</label>
      <S.InputWrapper>
        <TextareaAutosize
          name={name}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
        />
        {!!value && <ResetButton onClick={handleReset} isError={!!error} />}
      </S.InputWrapper>
    </S.InputContainer>
  );
};

export default InputTextArea;
