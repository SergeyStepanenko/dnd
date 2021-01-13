import React from 'react';
import * as S from './String.styled';

interface IInputStringProps {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  onChange: (event: React.ChangeEvent) => void;
}

const InputString: React.FC<IInputStringProps> = (props) => {
  const { label, name, value, placeholder, onChange } = props;

  return (
    <S.Label>
      {label}
      <S.Input
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        maxLength={50}
        onChange={onChange}
      />
    </S.Label>
  );
};

export default InputString;
