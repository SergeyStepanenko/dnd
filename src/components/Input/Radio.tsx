import React from 'react';
import {
  FORM_RADIO_VALUES_INITIAL,
  ERadioFields,
} from '../Form/Form.constants';
import * as S from './Radio.styled';

interface IRadioProps {
  label: string;
  values: typeof FORM_RADIO_VALUES_INITIAL;
  onChange: (values: typeof FORM_RADIO_VALUES_INITIAL) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
}

const Radio: React.FC<IRadioProps> = (props) => {
  const { label, values, onChange, error } = props;

  const handleInputStringChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChange({
      ...values,
      [ERadioFields.OtherValue]: event.target.value,
    });
  };

  const handleInputStringReset = () => {
    onChange({
      ...values,
      [ERadioFields.OtherValue]: undefined,
    });
  };

  const handleRadioChange = (name: string, isChecked: boolean) => {
    onChange({
      ...values,
      [name]: isChecked,
    });
  };

  const otherValue = values[ERadioFields.OtherValue];

  const checkboxesList = [
    ERadioFields.WebDesign,
    ERadioFields.WebDevelopment,
    ERadioFields['UI/UX'],
    ERadioFields.Logo,
    ERadioFields.Other,
  ];

  return (
    <S.InputContainer>
      <label>{label}</label>
      <S.CheckboxesContainer>
        {checkboxesList.map((name) => (
          <Checkbox
            key={name}
            name={name}
            isChecked={values[name]}
            onChange={handleRadioChange}
          />
        ))}
      </S.CheckboxesContainer>
      {values[ERadioFields.Other] && (
        <S.InputOther
          name={ERadioFields.OtherValue}
          value={otherValue}
          error={error}
          placeholder="What type?"
          onChange={handleInputStringChange}
          onReset={handleInputStringReset}
        />
      )}
      {!!error && <S.ErrorText mt="14px">{error}</S.ErrorText>}
    </S.InputContainer>
  );
};

const Checkbox: React.FC<{
  name: string;
  onChange: (name: string, isChecked: boolean) => void;
  isChecked: boolean;
}> = ({ name, onChange, isChecked }) => {
  const handleClick = () => {
    onChange(name, !isChecked);
  };

  return (
    <S.Checkbox onClick={handleClick}>
      {isChecked ? (
        <svg viewBox="0 0 26 26" width="26px" height="26px">
          <circle cx="13" cy="13" r="13" fill="#009dff" />
          <path
            d="M18.84,9.42l-1-1a.24.24,0,0,0-.16-.07h0a.2.2,0,0,0-.16.07l-7,7.07L7.93,12.9a.21.21,0,0,0-.31,0h0l-1,1a.23.23,0,0,0,0,.32h0l3.22,3.22a1,1,0,0,0,.67.33,1.14,1.14,0,0,0,.67-.32h0l7.7-7.73A.25.25,0,0,0,18.84,9.42Z"
            fill="#fff"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 26 26" width="26px" height="26px">
          <g style={{ opacity: '0.20000000298023224' }}>
            <circle cx="13" cy="13" r="13" fill="none" />
            <path
              d="M13,26A13,13,0,1,1,26,13,13,13,0,0,1,13,26ZM13,2A11,11,0,1,0,24,13,11,11,0,0,0,13,2Z"
              transform="translate(0 0)"
              fill="#fff"
            />
          </g>
        </svg>
      )}
      <S.Name>{name}</S.Name>
    </S.Checkbox>
  );
};

export default Radio;
