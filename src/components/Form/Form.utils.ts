import { FORM_VALUES_INITIAL, EFields } from './Form.constants';

export function getFormErrors(formValues: typeof FORM_VALUES_INITIAL) {
  const { fullName, subject, email, phone, message } = formValues;

  return {
    fullName: getFullNameError(fullName),
    subject: getSubjectError(subject),
    email: getEmailError(email),
    phone: getPhoneError(phone),
    message,
  };
}

export function getFullNameError(fullName: string | undefined) {
  return fullName ? undefined : 'Please provide your name';
}

export function getSubjectError(subject: string | undefined) {
  return subject ? undefined : 'Subject is a required field';
}

export function getPhoneError(phone: string | undefined) {
  return phone ? undefined : 'Phone is a required field';
}

export function getEmailError(email: string | undefined) {
  return /\S+@\S+\.\S+/.test(email)
    ? undefined
    : 'Please enter a valid email address';
}
