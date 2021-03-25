import React from 'react';
import emailjs from 'emailjs-com';
import {
  EFields,
  ERadioFields,
  FORM_VALUES_INITIAL,
  FORM_ERRORS_INITIAL,
  FORM_RADIO_VALUES_INITIAL,
} from './Form.constants';
import { getFormErrors, getTypeOfWorkMessage } from './Form.utils';

export default function useForm() {
  const [formValues, setFormValues] = React.useState<
    typeof FORM_VALUES_INITIAL
  >(FORM_VALUES_INITIAL);

  const [formErrors, setFormErrors] = React.useState<
    typeof FORM_ERRORS_INITIAL
  >(FORM_ERRORS_INITIAL);

  const [isSubmitting, setIsSubmitting] = React.useState(false);

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

    handleRadioInputChange(values: typeof FORM_RADIO_VALUES_INITIAL) {
      setFormValues((prevState) => ({
        ...prevState,
        [EFields.TypeOfWork]: values,
      }));

      setFormErrors((prevState) => ({
        ...prevState,
        [EFields.TypeOfWork]: undefined,
      }));
    },

    handleReset(name: string) {
      setFormValues((prevState) => ({
        ...prevState,
        [name]: '',
      }));
    },

    handleBlur(event: React.FocusEvent<HTMLInputElement>) {},

    async handleSubmit(event: React.FormEvent) {
      event.preventDefault();

      const formErrors = getFormErrors(formValues);
      setFormErrors(formErrors);

      const isError = Object.values(formErrors).filter(Boolean).length > 0;

      if (isError) {
        return;
      }

      const typeOfWorkMessage = getTypeOfWorkMessage(formValues);

      setIsSubmitting(true);
      await emailjs.send(
        'service_z6mwlti',
        'template_rmkqs5o',
        {
          from_name: formValues[EFields.FullName],
          full_name: formValues[EFields.FullName],
          phone: formValues[EFields.Phone],
          message: formValues[EFields.Message],
          type_of_work: typeOfWorkMessage,
        },
        'user_02i6rPO39lItFRdtgyHYK',
      );
      setIsSubmitting(false);
    },

    isSubmitting,
  };
}
