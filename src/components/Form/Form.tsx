import React from 'react';
import Input from '../Input';
import { EFields } from './Form.constants';
import useForm from './Form.hooks';
import * as S from './Form.styled';

const Form: React.FC = () => {
  const {
    formValues,
    formErrors,
    handleTextChange,
    handlePhoneChange,
    handleBlur,
    handleReset,
    handleSubmit,
  } = useForm();

  return (
    <S.Form>
      <S.Inner>
        <Input.String
          label="Full Name"
          name={EFields.FullName}
          value={formValues[EFields.FullName]}
          error={formErrors[EFields.FullName]}
          placeholder="Your Full Name"
          onChange={handleTextChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
        <Input.String
          label="Subject"
          name={EFields.Subject}
          value={formValues[EFields.Subject]}
          error={formErrors[EFields.Subject]}
          placeholder="Your Subject"
          onChange={handleTextChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
      </S.Inner>
      <S.Inner>
        <Input.Phone
          label="Phone"
          name={EFields.Phone}
          value={formValues[EFields.Phone]}
          error={formErrors[EFields.Phone]}
          onChange={handlePhoneChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
        <Input.String
          label="Email"
          name={EFields.Email}
          value={formValues[EFields.Email]}
          error={formErrors[EFields.Email]}
          placeholder="email@gmail.com"
          onChange={handleTextChange}
          onReset={handleReset}
          onBlur={handleBlur}
        />
      </S.Inner>
      <S.Inner>
        <Input.TextArea
          label="Message"
          name={EFields.Message}
          value={formValues[EFields.Message]}
          error={formErrors[EFields.Message]}
          placeholder="Type your message (optional)"
          maxLength={255}
          onChange={handleTextChange}
          onReset={handleReset}
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
};

export default Form;
