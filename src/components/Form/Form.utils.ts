import {
  FORM_VALUES_INITIAL,
  FORM_RADIO_VALUES_INITIAL,
} from './Form.constants';

export function getFormErrors(formValues: typeof FORM_VALUES_INITIAL) {
  const { fullName, subject, email, phone, message, type_of_work } = formValues;

  return {
    fullName: getFullNameError(fullName),
    subject: getSubjectError(subject),
    email: getEmailError(email),
    phone: getPhoneError(phone),
    message,
    type_of_work: getTypeOfWorkError(type_of_work),
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
