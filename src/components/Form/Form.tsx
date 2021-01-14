import React from 'react';
import Input from '../Input';
import { FORM_VALUES_INITIAL, EFields } from './Form.constants';
import * as S from './Form.styled';

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

  const handlePhoneChange = (phone: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [EFields.Phone]: phone,
    }));
  };

  const handleReset = (name: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: '',
    }));
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    console.log('event', event.target.name, event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <S.Form>
      <S.Inner>
        <Input.String
          label="Full Name"
          name={EFields.FullName}
          value={formValues[EFields.FullName]}
          placeholder="Your Full Name"
          onChange={handleChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
        <Input.String
          label="Subject"
          name={EFields.Subject}
          value={formValues[EFields.Subject]}
          placeholder="Your Subject"
          onChange={handleChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
      </S.Inner>
      <S.Inner>
        <Input.Phone
          label="Phone"
          name={EFields.Phone}
          value={formValues[EFields.Phone]}
          onChange={handlePhoneChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
        <Input.String
          label="Email"
          name={EFields.Email}
          value={formValues[EFields.Email]}
          placeholder="email@gmail.com"
          onChange={handleChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
      </S.Inner>
      <S.Inner>
        <Input.TextArea
          label="Message"
          name={EFields.Message}
          value={formValues[EFields.Message]}
          placeholder="Type your message (optional)"
          maxLength={255}
          onChange={handleChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
      </S.Inner>
      <S.Submit
        type="submit"
        as="input"
        value="Start a Project"
        onClick={handleSubmit}
      />
    </S.Form>
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
