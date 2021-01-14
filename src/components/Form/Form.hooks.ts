import React from 'react';
import {
  EFields,
  FORM_VALUES_INITIAL,
  FORM_ERRORS_INITIAL,
} from './Form.constants';
import { getFormErrors } from './Form.utils';

export default function useForm() {
  const [formValues, setFormValues] = React.useState<
    typeof FORM_VALUES_INITIAL
  >(FORM_VALUES_INITIAL);

  const [formErrors, setFormErrors] = React.useState<
    typeof FORM_ERRORS_INITIAL
  >(FORM_ERRORS_INITIAL);

  return {
    formValues,
    formErrors,

    handleTextChange(
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) {
      setFormValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));

      setFormErrors((prevState) => ({
        ...prevState,
        [event.target.name]: undefined,
      }));
    },

    handlePhoneChange(phone: string) {
      setFormValues((prevState) => ({
        ...prevState,
        [EFields.Phone]: phone,
      }));

      setFormErrors((prevState) => ({
        ...prevState,
        [EFields.Phone]: undefined,
      }));
    },

    handleReset(name: string) {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    },

    handleBlur(event: React.FocusEvent<HTMLInputElement>) {},

    handleSubmit(event: React.FormEvent) {
      const formErrors = getFormErrors(formValues);

      setFormErrors(formErrors);

      event.preventDefault();
    },
  };
}
