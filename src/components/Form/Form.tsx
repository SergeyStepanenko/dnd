import React from 'react';
import Input from '../Input';
import { EFields } from './Form.constants';
import useForm from './Form.hooks';
import * as S from './Form.styled';
import { palette } from '@/constants';

const Form: React.FC = () => {
  const {
    formValues,
    formErrors,
    handleTextChange,
    handlePhoneChange,
    handleRadioInputChange,
    handleBlur,
    handleReset,
    handleSubmit,
    isSubmitting,
  } = useForm();

  return (
    <S.Form>
      <S.Title variant="h2">Let’s Work Together!</S.Title>
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
          maxLength={1000}
          onChange={handleTextChange}
          onReset={handleReset}
        />
      </S.Inner>
      <S.Inner>
        <Input.Radio
          label="Type of Work You Need"
          values={formValues[EFields.TypeOfWork]}
          error={formErrors[EFields.TypeOfWork]}
          onChange={handleRadioInputChange}
        />
      </S.Inner>
      <S.Submit
        type="submit"
        as="input"
        value="Start a Project"
        onClick={handleSubmit}
        isSubmitting={isSubmitting}
      />
    </S.Form>
  );
};

export default Form;
