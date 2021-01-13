import React from 'react';
import Input from '../Input';
import * as S from './Form.styled';

enum EFields {
  FullName = 'fullName',
  Subject = 'subject',
  Phone = 'phone',
  Email = 'email',
  Message = 'message',
}

const FORM_VALUES_INITIAL = {
  [EFields.FullName]: '',
  [EFields.Subject]: '',
  [EFields.Phone]: '',
  [EFields.Email]: '',
  [EFields.Message]: '',
} as const;

const Form: React.FC = () => {
  const [formValues, setFormValues] = React.useState<
    typeof FORM_VALUES_INITIAL
  >(FORM_VALUES_INITIAL);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <S.Wrapper>
      <S.Inner>
        <Input.String
          label="Full Name"
          name={EFields.FullName}
          value={formValues[EFields.FullName]}
          placeholder="Your Full Name"
          onChange={handleChange}
        />
      </S.Inner>
    </S.Wrapper>
  );

  // return (
  //   <S.Form>
  //     <S.Inner>
  //       <S.FullName />
  //       <S.Subject />
  //     </S.Inner>
  //     <S.Inner>
  //       <S.Phone />
  //       <S.Email />
  //       <S.Message />
  //     </S.Inner>
  //   </S.Form>
  // );
};

export default Form;
