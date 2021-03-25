import {
  FORM_VALUES_INITIAL,
  FORM_RADIO_VALUES_INITIAL,
  EFields,
  ERadioFields,
} from './Form.constants';

export function getFormErrors(formValues: typeof FORM_VALUES_INITIAL) {
  const { fullName, subject, email, phone, message, typeOfWork } = formValues;

  return {
    fullName: getFullNameError(fullName),
    subject: getSubjectError(subject),
    email: getEmailError(email),
    phone: getPhoneError(phone),
    message: getMessageError(message),
    typeOfWork: getTypeOfWorkError(typeOfWork),
  };
}

function getFullNameError(fullName: string | undefined) {
  return fullName ? undefined : 'Please provide your name';
}

function getSubjectError(subject: string | undefined) {
  return subject ? undefined : 'Subject is a required field';
}

function getPhoneError(phone: string | undefined) {
  return phone ? undefined : 'Phone is a required field';
}

function getMessageError(message: string | undefined) {
  return undefined;
}

function getEmailError(email: string | undefined) {
  return /\S+@\S+\.\S+/.test(email)
    ? undefined
    : 'Please enter a valid email address';
}

function getTypeOfWorkError(typeOfWork: typeof FORM_RADIO_VALUES_INITIAL) {
  return Object.values(typeOfWork).filter(Boolean).length > 0
    ? undefined
    : 'Please select at least one type';
}

export function getTypeOfWorkMessage(formValues: typeof FORM_VALUES_INITIAL) {
  const typeOfWorkValues = formValues[EFields.TypeOfWork];

  const typeOfWorkMessage = Object.keys(formValues[EFields.TypeOfWork]).reduce(
    (acc, key: ERadioFields) => {
      if (key === ERadioFields.Other) {
        return acc;
      }

      const comma = acc ? ',' : '';

      if (
        key === ERadioFields.OtherValue &&
        typeOfWorkValues[ERadioFields.Other] &&
        typeOfWorkValues[key]
      ) {
        return `${acc}${comma} Other type of work: "${typeOfWorkValues[key]}"`;
      }

      if (!typeOfWorkValues[key] || key === ERadioFields.OtherValue) {
        return acc;
      }

      return `${acc}${comma} ${key}`;
    },
    '',
  );

  return typeOfWorkMessage;
}
